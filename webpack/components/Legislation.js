import React from 'react'
import { Router, Route, Link, browserHistory } from 'react-router'

class Legislation extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return <div>
    <div className='row legislationInfo'>
      <div className='col-sm-12'>
        <button className='btn legislationBtn'>
          <div className='headlineText text-left'>{this.props.data.billName}:</div>
          <div className='billDesc'>{this.props.data.billDesc}</div>
        </button>
      </div>
    </div>
    </div>
  }
}

export default Legislation
