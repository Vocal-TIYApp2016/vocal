import React from 'react'
import { Router, Route, Link, browserHistory } from 'react-router'
import SingleLegislator from './SingleLegislator'
import ShortHeader from './ShortHeader'
import { Accordian, Panel, Button } from 'react-bootstrap'

var resultsArray = []
var alllegislators = []
var results = []

class AllLegislators extends React.Component {
  constructor(props) {
    super(props)
    this.fetchAllLegislators = this.fetchAllLegislators.bind(this)
    this.filterResult = this.filterResult.bind(this)
    // this.doesItContain = this.doesItContain.bind(this)
    this.state = {
      legislators: [],
      open: false,
      searchText: '',
      results: []
    }
  }

  componentDidMount() {
      this.fetchAllLegislators()
  }

  fetchAllLegislators(){
      fetch('/legislators')
      .then(response => response.json())
      .then(response => this.setState({legislators: response.legislators, results: response.legislators}))

  }


  filterResult(e){
    resultsArray = []
    var searchText = e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1)
    var defaultArray = this.state.legislators
    var newResults = defaultArray.forEach(function(element){
      if(element.first_name.includes(searchText) || element.last_name.includes(searchText))
      {
        resultsArray.push(element)
      }
    })
    this.setState({results: resultsArray})
    console.log(this.state.results)
  }
  render() {
    // alllegislators = this.state.legislators.map((data, i) => {
    //   return <SingleLegislator data={data} key={i} />
    // })

    var searchalllegislators = this.state.results.map((data, i) => {
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
              <input type="text" id='legislatorSearch' className="form-control" placeholder="Search for..." onKeyDown={this.filterResult} />
              <span className="input-group-btn">
                <button className="btn btn-default" type="button">
         <span className="glyphicon glyphicon-search" aria-hidden="true"></span></button>
              </span>
            </li><br/>
              <div className="legText text-center">Filter by Year</div>
                <li className='btn legText yearText'>2016</li>
                <li className='btn legText yearText'>2015</li>
                <li className='btn legText yearText'>2014</li>
              <div className="legText text-center">Filter by Title</div>
                <li className='btn legText yearText'>Senator</li>
                <li className='btn legText yearText'>Representative</li>
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
          <div className="legText text-left">Filter by Year</div>
          <ul className='list-unstyled yearsNav text-right'>
            <li className='btn legText yearText'>2016</li>
            <li className='btn legText yearText'>2015</li>
            <li className='btn legText yearText'>2014</li>
          </ul>
          <div className="legText text-left">Filter by Title</div>
          <ul className="list-unstyled yearsNav text-right">
          <li className='btn legText yearText'>Senator</li>
          <li className='btn legText yearText'>Representative</li>
          </ul>
          </Panel>
          </div>

          <div className="col-sm-9 borderBills whiteBackground">
          <div onClick={this.showLegislator}>
            {alllegislators}
            {searchalllegislators}
          </div>
          </div>
        </div>
      </div>
    </div>
  }
}
export default AllLegislators
