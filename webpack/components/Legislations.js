import React from 'react'
import { Router, Route, Link, browserHistory } from 'react-router'
import Legislation from './Legislation'
import Loading from 'react-loading'

class Legislations extends React.Component {
  constructor(props) {
    super(props)
    this.updateLegislation = this.updateLegislation.bind(this)
    this.state = {
      allBills: [],
      arrayLength: ''
    }
  }

    componentDidMount(){
      fetch('/self?' + 'user_email=' + sessionStorage.getItem('email') + '&user_token=' +  sessionStorage.getItem('api_token'))
      .then(response => response.json())
      .then(this.updateLegislation)
      // .then(response => console.log(response))
    }

    updateLegislation(userData) {
      var finalArray = []
      var defArray = []
        var expanded = userData.user.legislators.map((element) => {
          var further = element.authored_expanded.map((bill) => {
            finalArray.push(bill)
          })
          })
        this.setState({
          allBills: finalArray,
          arrayLength: Number(finalArray.length)
        })
    }

  render() {
    if(this.state.arrayLength != 0) {
      var bill = this.state.allBills.map((data, i) => {
        return <Legislation data={data} key={i} />
      })
    }
    else {
      return <div className='hiddenSection'>
               <div className="rightBottom">
                 <div className="titleFont" id="titleFont">Legislation</div>
                   {/* <button className="btn avatarText text-center center-block" id="profileAvatarTextBtn">loading<br/> legislators</button> */}
                   <div className="loadingIcon">
                      <Loading type='bubbles' color='#223843' />
                   </div>
                 </div>
               </div>
    }

    return <div>
            <div className='hiddenSection'>
              <div  className="rightBottom">
                <div className="titleFont" id="titleFont">Legislation</div>
                  <div className='profileBox' id="legislationBox">
                  {bill}
                  </div>
              </div>
             </div>
           </div>
  }
}

export default Legislations
