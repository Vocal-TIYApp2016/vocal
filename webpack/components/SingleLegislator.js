import React from 'react'
import { Router, Route, Link, browserHistory } from 'react-router'

class SingleLegislator extends React.Component {
  constructor(props) {
    super(props)
    this.showLegislator = this.showLegislator.bind(this)

  }
  showLegislator(response) {
    // sessionStorage.removeItem('legislator_id', this.props.data.id)
    // sessionStorage.setItem('legislator_id', this.props.data.id)
    sessionStorage.setItem('full_name', this.props.data.full_name)
    window.location.href = '/legislatorprofile/committees?id=' +  this.props.data.id
  }

  render() {
    return <div>
        <div className='col-sm-3'>
          <img src={this.props.data.leg_image} className='profileImg img-circle img-responsive center-block' alt='legislator photo' onClick={this.showLegislator} />
          <div className='text-center legText'>{this.props.data.title} <br/>
          {this.props.data.first_name} {this.props.data.last_name}</div><br/><br/>
        </div>
    </div>
  }
}

export default SingleLegislator
