import React from 'react'
import { Router, Route, Link, browserHistory } from 'react-router'
import Legislator from './Legislator'

class Legislators extends React.Component {
 constructor(props) {
   super(props)
   this.updateLegislators = this.updateLegislators.bind(this)
   this.state = {
     legislators: [],
     arrayLength: ''
   }
 }

   componentDidMount() {
       fetch('/self?' + 'user_email=' + sessionStorage.getItem('email') + '&user_token=' +  sessionStorage.getItem('api_token'))
       .then(response => response.json())
       .then(this.updateLegislators)
   }

   updateLegislators(userData) {
      var emptyArray = []
      var namesList = []
      var finalArray = []
      var legArray = userData.user.legislators
      var trash = legArray.map((data, i) => {
        if (namesList.includes(data.full_name)) {
           emptyArray.push(data)
        }
        else{
           namesList.push(data.full_name)
           finalArray.push(data)
        }
     })
      this.setState({
         legislators: finalArray,
         arrayLength: Number(userData.user.legislators.length)
      })
   }

 render() {
    if(this.state.arrayLength != 0) {
         var legislator = this.state.legislators.map((data, i) => {
            return <Legislator data={data} key={i} />
               })
   }
   else {
     return <div className='hiddenSection'>
              <div className="rightSide">
                <div className="titleFont" id="titleFont">Legislators</div>
                  <Link to="/alllegislators" className="noDecoration"><button className="btn avatarText text-center center-block" id="profileAvatarTextBtn">start<br/> following</button></Link>
                </div>
              </div>
   }

   return <div className='hiddenSection'>
           <div className="rightSide">
             <div className="text-left titleFont" id="titleFont">Legislators</div>
             <div className="profileBox" id="legislatorBox">
              {legislator}
             </div>
            </div>
          </div>
 }
}

export default Legislators
