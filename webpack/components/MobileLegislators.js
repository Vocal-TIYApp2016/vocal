import React from 'react'
import { Router, Route, Link, browserHistory } from 'react-router'
import Legislator from './Legislator'
import ProfileHeader from './ProfileHeader'

class MobileLegislators extends React.Component {
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
      //  .then(response => console.log(response))
   }

  //  componentWillReceiveProps() {
  //     this.updateLegislators(window.currentLegislatorProfile)
  //  }

  updateLegislators(userData) {
     var emptyArray = []
     var namesList = []
     var finalArray = []
     var legArray = userData.user.legislators
     var trash = legArray.map((data, i) => {
        // console.log(data.full_name)
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
     // console.log(this.state.arrayLength)
  }

 render() {
    if(this.state.arrayLength != 0) {
         var legislator = this.state.legislators.map((data, i) => {
            return <Legislator data={data} key={i} />
               })
   }
   else {
   return <div>
    <div className="col-xs-12 columnContainer">
        <Link to="/alllegislators"><button className="btn avatarText text-center">start following</button></Link>
      </div>
    </div>
   }
    return <div>
      <div className="col-xs-12 columnContainer">
        <div className='profileBox'>
          {legislator}
        </div>
      </div>
    </div>
  }
}

export default MobileLegislators
