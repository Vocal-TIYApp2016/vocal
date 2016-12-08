import React from 'react'
import { Router, Route, Link, browserHistory } from 'react-router'
import SingleLegislation from './SingleLegislation'
import ShortHeader from './ShortHeader'

class AllLegislations extends React.Component {
  constructor(props) {
    super(props)
    this.updateLegislation = this.updateLegislation.bind(this)
    this.state = {
      bills: []
    }
  }

  componentDidMount(){
    fetch('/self?' + 'user_email=' + sessionStorage.getItem('email') + '&user_token=' +  sessionStorage.getItem('api_token'))
    .then(response => response.json())
    // .then(response => console.log(response))
    .then(this.updateLegislation)
  }

  updateLegislation(userData) {
    var finalArray = []
    var defArray = []
      // this.setState({
      //    allBills: userData.user.legislators,
      //   //  arrayLength: Number(userData.user.legislators.length)
      // })
      var expanded = userData.user.legislators.map((element) => {
        var further = element.authored_expanded.map((bill) => {
          finalArray.push(bill)
        })
        })
      this.setState({
        bills: finalArray
      })
      console.log(this.state.allBills)
  }




  render() {
    var alllegislation = this.state.bills.map((data, i) => {
      return <SingleLegislation data={data} key={i} />
    })
    return <div>
      <div className='container-fluid'>
        <ShortHeader />
      </div> <br/>
      <div className="container-fluid whiteBackground">
      <br/>
        <div className="row">
          <div className="col-sm-3">
            <ul className='list-unstyled yearsNav text-right'>
            <li className="input-group">
              <input type="text" className="form-control" placeholder="Search for..." />
              <span className="input-group-btn">
                <button className="btn" type="button">
         <span className="glyphicon glyphicon-search" aria-hidden="true"></span></button>
              </span>
              </li><br/>
              <div className="legText text-center">Filter by Year</div>
              <li className='btn legText yearText'>2016</li>
              <li className='btn legText yearText'>2015</li>
              <li className='btn legText yearText'>2014</li>
            <div className="legText text-center">Filter by Type</div>
              <li className='btn legText yearText'>Senate Bills</li>
              <li className='btn legText yearText'>House Bills</li>
            </ul>
          </div>
          <div className="col-sm-9 borderBills whiteBackground">
            {alllegislation}
          </div>
        </div>
      </div>
    </div>
  }
}
export default AllLegislations
