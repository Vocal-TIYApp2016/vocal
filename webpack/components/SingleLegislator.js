import React from 'react'
import { Router, Route, Link, browserHistory } from 'react-router'

class SingleLegislator extends React.Component {
  constructor(props) {
    super(props)

  }


  render() {
    return <div>

        <div className='col-sm-3'>
          <img src='https://unsplash.it/400?random' className='profileImg img-response img-circle center-block' alt='important person' />
          <div className='text-center legText'>{this.props.data.title} <br/>
          {this.props.data.firstName} {this.props.data.lastName}</div>
        </div>

    </div>
  }
}

export default SingleLegislator
