import React from 'react'
import { Router, Route, Link, browserHistory } from 'react-router'

class ProfileHeader extends React.Component {
  constructor(props) {
    super(props)
    this.updateUser = this.updateUser.bind(this)
    this.logout = this.logout.bind(this)
    this.state = {
      firstName: "--",
      lastName: "--",
      photo: null,
      username: "--",
      // points: '',
    }
  }
  componentDidMount() {
    fetch('/users/' +  sessionStorage.getItem('user_id'))
    .then(response => response.json())
    .then(this.updateUser)
   }

   updateUser(userData) {
    this.setState ({
      photo: userData.profile_image,
      firstName: userData.first_name,
      lastName: userData.last_name,
      username: userData.username
    })
   }

   logout(){
     sessionStorage.removeItem('user_id')
  }

  render(){
    return <div>
      <div className='row'>
        <div className='col-sm-4'>
          <h1 className='logoFont'>vocal</h1>
        </div>
        <div className='col-sm-4'>
          <img src={this.state.photo} alt='profile photo' className='img-responsive center-block img-circle profileImg' />
          <br />
          <h2 className="text-center profileText">{this.state.firstName} {this.state.lastName}</h2>
          <h5 className="text-center profileTextTwo">{this.state.username} | 200</h5>
        </div>
        <div className='col-sm-4'>
          <ul className='text-right list-unstyled list-inline'>
            <Link to="/legislators" className="linkStyle"><li className='navItems'>Legislators</li></Link>
            <Link to="/legislation" className="linkStyle"><li className='navItems'>Legislation</li></Link>
            <Link to="/settings" className="linkStyle"><li className='navItems'>Settings</li></Link>
            <Link to="/" className="linkStyle" onClick={this.logout}><li className='navItems'>Logout</li></Link>

          </ul>
        </div>
      </div>
    </div>
  }
}
export default ProfileHeader
