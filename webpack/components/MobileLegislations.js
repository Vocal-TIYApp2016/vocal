import React from 'react'
import { Router, Route, Link, browserHistory } from 'react-router'
import Legislation from './Legislation'
import ProfileHeader from './ProfileHeader'
import Loading from 'react-loading'

class MobileLegislations extends React.Component {
  constructor(props) {
    super(props)
    this.updateLegislations = this.updateLegislations.bind(this)
    this.state = {
      allBills: [],
      arrayLength: ''
    }
  }

  componentDidMount(){
    fetch('/self?' + 'user_email=' + sessionStorage.getItem('email') + '&user_token=' +  sessionStorage.getItem('api_token'))
    .then(response => response.json())
    .then(this.updateLegislations)
  }

  updateLegislations(userData) {
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
      return <div className="col-xs-12 columnContainer">
          <div className="profileBox" id="committeeBox">
            <Loading type='bubbles' color='#223843' />
          </div>
      </div>
    }
    return <div>
            <div  className="col-xs-12 columnContainer">
              <div className='profileBox' id="committeeBox">
              {bill}
              </div>
             </div>
           </div>
  }
}

export default MobileLegislations
