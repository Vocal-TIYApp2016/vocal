import React from 'react'
import { Router, Route, Link, browserHistory } from 'react-router'
import Legislators from './Legislators'
import NewsItems from './NewsItems'
import Legislations from './Legislations'
import ShortHeader from './ShortHeader'
import MainHeader from './MainHeader'
import UserInfo from './UserInfo'
import URL from 'url-parse'

class Profile extends React.Component {
  render() {
    return <div>
      <div className='container-fluid'>
        <MainHeader />
      </div><br/><br/>
        <div className="container-fluid">
            <div className="row">
                <div className="mobileReveal">
                  <div className='col-xs-12 noPadding'>
                    <Link to='/profile/legislators'><button className='btn btn-block mobileNavbar'>Legislators</button></Link>
                  </div>
                  <div className='col-xs-12 noPadding'>
                    <Link to='/profile/news'><button className='btn btn-block mobileNavbar'>News Feed</button></Link>
                  </div>
                  <div className='col-xs-12 noPadding'>
                    <Link to='/profile/legislation'><button className='btn btn-block mobileNavbar'>Legislation</button></Link>
                  </div>
                    {this.props.children}
                </div>
            </div>
            <div className="container">
                <div className="row">
                  <div className="col-sm-6 noPadding">
                    <UserInfo />
                    <NewsItems />
                  </div>
                  <div className="col-sm-6 noPadding">
                    <Legislators />
                    <Legislations />
                  </div>
                </div>
            </div>
        </div>
    </div>
  }
}
export default Profile
