import React from 'react'
import { Router, Route, Link, browserHistory } from 'react-router'
import SingleLegislator from './SingleLegislator'
import ShortHeader from './ShortHeader'
import { Accordian, Panel, Button } from 'react-bootstrap'

var resultsArray = []
var alllegislators = []

class AllLegislators extends React.Component {
  constructor(props) {
    super(props)
    this.fetchAllLegislators = this.fetchAllLegislators.bind(this)
    this.filterResult = this.filterResult.bind(this)
    this.state = {
      legislators: [],
      open: false,
      searchText: ''
    }
  }

  componentDidMount() {
      this.fetchAllLegislators()
  }

  fetchAllLegislators(){
      fetch('/legislators')
      .then(response => response.json())
      .then(response => this.setState({legislators: response.legislators}))
  }

  filterResult(e){
    var searchText = e.target.value
    var searchResults = this.state.legislators.forEach(function(element){
      return element.first_name
    })
    console.log(searchResults)
    // console.log(searchResults)
  }





  render() {
    alllegislators = this.state.legislators.map((data, i) => {
      return <SingleLegislator data={data} key={i} />
    })
    return <div>
      <div className='container-fluid'>
        <ShortHeader />
      </div> <br/>
      <div className="container-fluid legislatorBackground">
      <br/>
        <div className="row">
          <div className="col-sm-3 hiddenSection">
            <ul className='list-unstyled yearsNav text-right'>
            <li className="input-group">
              <input type="text" id='legislatorSearch' className="form-control" placeholder="Search for..." onChange={this.filterResult} />
              <span className="input-group-btn">
                <button className="btn btn-default" type="button">
         <span className="glyphicon glyphicon-search" aria-hidden="true"></span></button>
              </span>
            </li><br/>
              <li className='btn legText yearText'>2016</li>
              <li className='btn legText yearText'>2015</li>
              <li className='btn legText yearText'>2014</li>
            </ul>
          </div>

          <div className="col-sm-3 mobileReveal">
          <div className="input-group">
            <input type="text" className="form-control" placeholder="Search for..." />
            <span className="input-group-btn">
              <button className="btn btn-default" type="button">
          <span className="glyphicon glyphicon-search" aria-hidden="true"></span></button>
            </span>
          </div>
          <Button className='billBtn' onClick={ ()=> this.setState({ open: !this.state.open })}>
            <div className="navItems text-left">filter</div>
          </Button>
          <Panel collapsible expanded={this.state.open}>
            Filter by Year
          <ul className='list-unstyled yearsNav text-right'>
            <li className='btn legText yearText'>2016</li>
            <li className='btn legText yearText'>2015</li>
            <li className='btn legText yearText'>2014</li>
          </ul><br/>
          Filter by Title
          <ul className="list-unstyled yearsNav text-right">
          <li className='btn legText yearText'>Senate</li>
          <li className='btn legText yearText'>House</li>
          </ul>
          </Panel>
          </div>

          <div className="col-sm-9 borderBills whiteBackground">
          <div onClick={this.showLegislator}>
            {alllegislators}
          </div>
          </div>
        </div>
      </div>
    </div>
  }
}
export default AllLegislators
