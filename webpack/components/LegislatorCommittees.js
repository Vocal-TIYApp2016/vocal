import React from 'react'
import { Router, Route, Link, browserHistory } from 'react-router'
import LegislatorCommittee from './LegislatorCommittee'

class LegislatorCommittees extends React.Component {
  constructor(props) {
    super(props)
    this.updateCommittees = this.updateCommittees.bind(this)
    this.state = {
      committees: []
  }
}

   componentWillReceiveProps() {
     if (window.currentLegislatorProfile) {
       this.updateCommittees(window.currentLegislatorProfile)
     }
   }

   updateCommittees(data) {
     this.setState ({
       committees: data.legislator.committees
     })
   }

  render() {
    var committee = this.state.committees.map((data, i) => {
      return <LegislatorCommittee data={data} key={i} />
    })
    return <div>
            <div className='hiddenSection'>
              <div  className="col-sm-3 columnContainer">
                <div className="text-center titleFont">Committees</div>
                 <div className='profileBox' id="committeeBox">
                  {committee}
                 </div>
              </div>
            </div>
           </div>
  }
}

export default LegislatorCommittees
