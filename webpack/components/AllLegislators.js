import React from 'react'
import { Router, Route, Link, browserHistory } from 'react-router'
import SingleLegislator from './SingleLegislator'
import ShortHeader from './ShortHeader'

class AllLegislators extends React.Component {
  constructor(props) {
    super(props)
    this.fetchAllLegislators = this.fetchAllLegislators.bind(this)
    // this.showLegislator = this.showLegislator.bind(this)
    this.state = {
      legislators: []
    }
  }

  componentDidMount() {
      this.fetchAllLegislators()
  }

  fetchAllLegislators(){
      fetch('/legislators')
      .then(response => response.json())
      .then(response => this.setState({legislators: response.legislators}))
      // .then(response => console.log(response))
  }

  // showLegislator(response) {
  //   sessionStorage.removeItem('legislator_id', this.legislators.id)
  //   sessionStorage.setItem('legislator_id', this.legislators.id)
  //   window.location.href = '/legislatorprofile'
  // }



  render() {
    var alllegislators = this.state.legislators.map((data, i) => {
      return <SingleLegislator data={data} key={i} />
    })
    return <div>
      <div className='container-fluid'>
        <ShortHeader />
      </div> <br/>
      <div className="container-fluid legislatorBackground">
        <div onClick={this.showLegislator}>{alllegislators}</div>
      </div>
    </div>
  }
}
export default AllLegislators
