import React from 'react'
import { Router, Route, Link, browserHistory } from 'react-router'
import LegislatorCommittee from './LegislatorCommittee'
import URL from 'url-parse'
import Loading from 'react-loading'

class MobileLegCommittees extends React.Component {
  constructor(props) {
    super(props)
    let url = new URL(window.location.href, true)
    this.updateCommittees = this.updateCommittees.bind(this)
    this.state = {
      committees: [],
      url: url,
      arrayLength: ''
  }
}

  componentDidMount() {
    fetch('/legislators/' +  this.state.url.query.id)
    .then(response => response.json())
    .then(this.updateCommittees)
   }

   updateCommittees(data) {
     this.setState ({
       committees: data.legislator.committees,
       arrayLength: Number(data.legislator.committees.length)
     })
   }

  render() {
    if(this.state.arrayLength != 0) {
      var committee = this.state.committees.map((data, i) => {
        return <LegislatorCommittee data={data} key={i} />
      })
    }
    else {
      return <div className="col-xs-12 columnContainer">
        <div className="loadingIcon">
          <Loading type='bubbles' color='white' />
        </div>
      </div>
    }
    return <div>
            <div className="col-xs-12 columnContainer">
             <div className='profileBox'>
              {committee}
             </div>
            </div>
           </div>
  }
}

export default MobileLegCommittees
