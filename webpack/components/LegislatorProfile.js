import React from 'react'
import { Router, Route, Link, browserHistory } from 'react-router'
import LegislatorHeader from './LegislatorHeader'
import LegislatorBills from './LegislatorBills'
import LegislatorNewsItems from './LegislatorNewsItems'
import LegislatorCommittees from './LegislatorCommittees'


class LegislatorProfile extends React.Component {
  render() {
    return <div>
      <div className='container-fluid'>
        <LegislatorHeader />
      </div> <br/> <br/>
      <div className="container-fluid">
        <div className="row">
          <div className="mobileReveal">
            <div className='col-xs-4'>
            <Link to='/legislatorprofile/committees'><button className='btn btn-block mobileNavbar'>Committees</button></Link>
            </div>
            <div className='col-xs-4'>
            <Link to='/legislatorprofile/news'><button className='btn btn-block mobileNavbar'>News Feed</button></Link>
            </div>
            <div className='col-xs-4'>
            <Link to='/legislatorprofile/legislation'><button className='btn btn-block mobileNavbar'>Legislation</button></Link>
            </div>
            {this.props.children}
          </div>
          <LegislatorCommittees />
          <LegislatorNewsItems />
          <LegislatorBills />

        </div>
      </div>
    </div>
  }
}
export default LegislatorProfile
