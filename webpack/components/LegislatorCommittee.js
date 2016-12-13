import React from 'react'
import { Router, Route, Link, browserHistory } from 'react-router'

class LegislatorCommittee extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return <div>
            <div className="row legislatorInfo noMargin">
              <div className="col-sm-12 noPadding">
                <div className="text-center legText" id='committeeText'>{this.props.data.name}</div>
              </div>
             </div>
           </div>
  }
}

export default LegislatorCommittee
