import React from 'react'
import { Router, Route, Link, browserHistory } from 'react-router'

class LegislatorCommittee extends React.Component {
  constructor(props) {
    super(props)
    // this.updateCommittee = this.updateCommittee.bind(this)
  }

  // componentDidMount() {
  //   fetch('/legislators/' +  sessionStorage.getItem('legislator_id'))
  //   .then(response => response.json())
  //   // .then(this.updateCommittee)
  //   .then(response => console.log(response))
  //  }

  //  updateCommittee(data){
  //    this.setState ({
  //      committeeArray: this.props.data.committees
  //    })
  //  }


  render() {
    return <div className="row legislatorInfo noMargin">
      <div className="col-sm-12 noPadding">
        <div className="text-center legText" id='committeeText'>{this.props.data.name}</div>
      </div>

    </div>

  }
}

export default LegislatorCommittee
