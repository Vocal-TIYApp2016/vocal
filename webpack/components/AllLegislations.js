import React from 'react'
import { Router, Route, Link, browserHistory } from 'react-router'
import SingleLegislation from './SingleLegislation'
import ShortHeader from './ShortHeader'

class AllLegislations extends React.Component {
  constructor(props) {
    super(props)
    this.updateLegislation = this.updateLegislation.bind(this)
    this.filterEducation = this.filterEducation.bind(this)
    this.showAll = this.showAll.bind(this)
    this.filterTransportation = this.filterTransportation.bind(this)
    this.filterHealth = this.filterHealth.bind(this)
    this.filterTaxes = this.filterTaxes.bind(this)
    this.state = {
      bills: [],
      default: []
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
        bills: finalArray,
        default: finalArray
      })
  }
  filterEducation(){
    var array = []
    var starter = this.state.default.map((data, i) => {
      var stupid = data.latestVersion.shortDescription
      if(stupid.includes('college') || stupid.includes('education') || stupid.includes('school') || stupid.includes('university') || stupid.includes('teachers')) {
        array.push(data)
      }
    })
    this.setState({
      bills: array
    })
  }
  filterTransportation(){
    var array = []
    var starter = this.state.default.map((data, i) => {
      var stupid = data.latestVersion.shortDescription
      if(stupid.includes('cars') || stupid.includes('trucks') || stupid.includes('highway') || stupid.includes('street') || stupid.includes('automobile') || stupid.includes(' INDOT ')) {
        array.push(data)
      }
    })
    this.setState({
      bills: array
    })
  }
  filterHealth(){
    var array = []
    var starter = this.state.default.map((data, i) => {
      var stupid = data.latestVersion.shortDescription
      if(stupid.includes('health') || stupid.includes('medicine') || stupid.includes('prescription') || stupid.includes('doctor') || stupid.includes('nurse')) {
        array.push(data)
      }
    })
    this.setState({
      bills: array
    })
  }
  filterTaxes(){
    var array = []
    var starter = this.state.default.map((data, i) => {
      var stupid = data.latestVersion.shortDescription
      if(stupid.includes(' tax ') || stupid.includes(' taxes ')) {
        array.push(data)
      }
    })
    this.setState({
      bills: array
    })
  }
  showAll(){
    this.setState({
      bills: this.state.default
    })
  }




  render() {
    console.log(this.state.bills)
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
            {/* <li className="input-group">
              <input type="text" className="form-control" placeholder="Search for..." />
              <span className="input-group-btn">
                <button className="btn" type="button">
         <span className="glyphicon glyphicon-search" aria-hidden="true"></span></button>
              </span>
              </li><br/> */}
              <div className="legText text-center">Filter by Category</div> <br/>
              <li className='btn legText yearText' onClick={this.showAll}>Show All</li>
              <li className='btn legText yearText' onClick={this.filterEducation}>Education</li>
              <li className='btn legText yearText' onClick={this.filterTransportation}>Transportation</li>
              <li className='btn legText yearText' onClick={this.filterHealth}>Health</li>
              <li className='btn legText yearText' onClick={this.filterTaxes}>Taxes</li>
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
