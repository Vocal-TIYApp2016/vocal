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
    return <div>
    <div className="row legislatorInfo">
      <div className="col-sm-12">
        <div className="text-left legText">- {this.props.data.name}</div>
      </div>

    </div>
    </div>
  }
}

export default LegislatorCommittee
