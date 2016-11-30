import React from 'react'
import { Router, Route, Link, browserHistory } from 'react-router'
import LegislatorCommittee from './LegislatorCommittee'

class LegislatorCommittees extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      committees: [
        {
        title: 'lorem lorem lorem'
      },
      {
      title: 'title title title'
    }
    ]
    }
  }

  render() {
    var committee = this.state.committees.map((data, i) => {
      return <LegislatorCommittee data={data} key={i} />
    })
    return <div>
      <div  className="col-sm-3 columnContainer">
        <div className="text-center titleFont">Committees</div>
         <div className='profileBox'>
          {committee}
          </div>
      </div>
    </div>
  }
}

export default LegislatorCommittees
