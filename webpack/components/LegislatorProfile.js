import React from 'react'
import { Router, Route, Link, browserHistory } from 'react-router'
import LegislatorHeader from './LegislatorHeader'
import LegislatorBills from './LegislatorBills'
import LegislatorNewsItems from './LegislatorNewsItems'
import LegislatorCommittees from './LegislatorCommittees'


class Profile extends React.Component {
  render() {
    return <div>
      <div className='container-fluid'>
        <LegislatorHeader />
      </div> <br/> <br/>
      <div className="container-fluid">
        <div className="row">
          <LegislatorCommittees />
          <LegislatorNewsItems />
          <LegislatorBills />

        </div>
      </div>
    </div>
  }
}
export default Profile
