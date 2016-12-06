import React from 'react'
import { Router, Route, Link, browserHistory } from 'react-router'
import SingleLegislator from './SingleLegislator'
import ShortHeader from './ShortHeader'
import { Accordian, Panel, Button } from 'react-bootstrap'

// var resultsArray = []
// var alllegislators = []
// var results = []
// var senatorArray = []

class AllLegislators extends React.Component {
  constructor(props) {
    super(props)
    this.fetchAllLegislators = this.fetchAllLegislators.bind(this)
    this.filterResult = this.filterResult.bind(this)
    this.get2014 = this.get2014.bind(this)
    this.get2015 = this.get2015.bind(this)
    this.get2016 = this.get2016.bind(this)
    this.showSenators = this.showSenators.bind(this)
    this.showReps = this.showReps.bind(this)
    this.showAll = this.showAll.bind(this)
    this.setSearchText = this.setSearchText.bind(this)
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
      fetch('/legislators/filter?q[year_eq]=2016')
      .then(response => response.json())
      .then(response => this.setState({legislators: response.legislators, results: response.legislators}))
      // .then(response => console.log(response))

  }
  setSearchText(e){
    var newText = e.target.value
    this.setState({
      searchText: newText
    })
    console.log(newText)
    setTimeout(() => this.filterResult(), 0)
  }


  filterResult(){
    var searchTerm = this.state.searchText
    var resultsArray = []
    var searchWords = searchTerm.split(' ')
    var upperTesteroni = searchWords.map(function(data){
      return data.charAt().toUpperCase() + data.slice(1)
    })
    var searchText = upperTesteroni.join(' ')
    var defaultArray = this.state.legislators
    var newResults = defaultArray.forEach(function(element){
      if(element.full_name.includes(searchText))
      {
        resultsArray.push(element)
      }
    })
    // console.log(resultsArray)
    this.setState({results: resultsArray})
    // console.log(this.state.results)
  }

  get2014(){
    fetch('/legislators/filter?q[year_eq]=2014')
    .then(response => response.json())
    .then(response => {
      this.setState({legislators: response.legislators})
      setTimeout(() => this.filterResult(), 0)
    })
  }
  get2015(){
    fetch('/legislators/filter?q[year_eq]=2015')
    .then(response => response.json())
    .then(response => {
      this.setState({legislators: response.legislators})
      setTimeout(() => this.filterResult(), 0)
    })
  }
  get2016(){
    fetch('/legislators/filter?q[year_eq]=2016')
    .then(response => response.json())
    .then(response => {
      this.setState({legislators: response.legislators})
      setTimeout(() => this.filterResult(), 0)
    })
  }
  showAll(){

  }
  showSenators(){

  }
  showReps(){

  }

  render() {
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
              <input type="text" id='legislatorSearch' className="form-control" placeholder="Search for..." onChange={this.setSearchText} />
              <span className="input-group-btn">
                <button className="btn" type="button">
         <span className="glyphicon glyphicon-search" aria-hidden="true"></span></button>
              </span>
            </li><br/>
              <div className="legText text-center">Filter by Year</div>
                <li className='btn legText yearText' onClick={this.get2016}>2016</li>
                <li className='btn legText yearText' onClick={this.get2015}>2015</li>
                <li className='btn legText yearText' onClick={this.get2014}>2014</li>
              <div className="legText text-center">Filter by Title</div>
                <li className='btn legText yearText' onClick={this.showSenators}>Senator</li>
                <li className='btn legText yearText' onClick={this.showReps}>Representative</li>
                <li className='btn legText yearText' onClick={this.showAll}>Show All</li>

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
            {searchalllegislators}
          </div>
          </div>
        </div>
      </div>
    </div>
  }
}
export default AllLegislators
