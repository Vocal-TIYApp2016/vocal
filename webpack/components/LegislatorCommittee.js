import React from 'react'
import { Router, Route, Link, browserHistory } from 'react-router'

class LegislatorCommittee extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return <div>
    <div className="row legislatorInfo">
      <div className="col-sm-12">
        <div className="text-center legText">{this.props.data.title}</div>
      </div>

    </div>
    </div>
  }
}

export default LegislatorCommittee
