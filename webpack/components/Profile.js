import React from 'react'
import { Router, Route, Link, browserHistory } from 'react-router'
import ProfileHeader from './ProfileHeader'
import Legislators from './Legislators'
import NewsItems from './NewsItems'
import Legislations from './Legislations'


class Profile extends React.Component {
  render() {
    return <div>
      <div className='container-fluid'>
        <ProfileHeader />
      </div> <br/> <br/>
      <div className="container-fluid">
        <div className="row">
        <div className="mobileReveal">
          <div className='col-xs-4'>
          <Link to='/legislators'><button className='btn btn-block mobileNavbar'>Legislators</button></Link>
          </div>
          <div className='col-xs-4'>
          <Link to='/news'><button className='btn btn-block mobileNavbar'>News Feed</button></Link>
          </div>
          <div className='col-xs-4'>
          <Link to='/legislation'><button className='btn btn-block mobileNavbar'>Legislation</button></Link>
          </div>
        </div>
        <Legislators />
        <NewsItems />
        <Legislations />
      </div>
    </div>
    </div>
  }
}
export default Profile
