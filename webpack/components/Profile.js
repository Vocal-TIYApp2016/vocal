import React from 'react'
import { Router, Route, Link, browserHistory } from 'react-router'
import ProfileHeader from './ProfileHeader'


class Profile extends React.Component {
  render() {
    return <div>
      <div className='container-fluid'>
        <ProfileHeader />
      </div>
    </div>
  }
}
export default Profile
