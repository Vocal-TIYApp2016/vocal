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
          <Legislators />
          <NewsItems />
          <Legislations />
        </div>
      </div>
    </div>
  }
}
export default Profile
