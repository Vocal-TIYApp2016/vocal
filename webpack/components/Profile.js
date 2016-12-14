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
  constructor(props) {
    super(props)
    this.state = {
      currentUserProfile: undefined,
    }
  }
  componentDidMount() {
      fetch('/self?' + 'user_email=' + sessionStorage.getItem('email') + '&user_token=' +  sessionStorage.getItem('api_token'))
      .then(response => response.json())
      // .then(response => console.log(response))
      .then((response) => {
        window.currentUserProfile = response
        this.setState({currentUserProfile: response})
      })
  }
  render() {
    return <div>
      <div className='container-fluid'>
        <MainHeader />
      </div><br/><br/>
        <div className="container-fluid">
            <div className="row">
                <div className="mobileReveal">
                  <div className='col-xs-12 noPadding'>
                    <Link to='/profile/legislators' className="noDecoration"><button className='btn btn-block mobileNavbar'>Legislators</button></Link>
                  </div>
                  <div className='col-xs-12 noPadding'>
                    <Link to='/profile/news' className="noDecoration"><button id="navBorder" className='btn btn-block mobileNavbar'>News Feed</button></Link>
                  </div>
                  <div className='col-xs-12 noPadding'>
                    <Link to='/profile/legislation' className="noDecoration"><button className='btn btn-block mobileNavbar'>Legislation</button></Link>
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
