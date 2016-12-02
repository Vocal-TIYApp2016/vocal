import React from 'react'
import { Router, Route, Link, browserHistory } from 'react-router'

class SingleLegislator extends React.Component {
  constructor(props) {
    super(props)

  }


  render() {
    return <div>
        <div className='col-sm-3'>
          <img src={this.props.data.leg_image} className='profileImg img-response img-circle center-block' alt='legislator photo' />
          <div className='text-center legText'>{this.props.data.title} <br/>
          {this.props.data.first_name} {this.props.data.last_name}</div>
        </div>
    </div>
  }
}

export default SingleLegislator
