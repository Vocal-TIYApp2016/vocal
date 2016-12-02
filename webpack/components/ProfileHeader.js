import React from 'react'
import { Router, Route, Link, browserHistory } from 'react-router'
import { DropdownButton, MenuItem } from 'react-bootstrap'

class ProfileHeader extends React.Component {
  constructor(props) {
    super(props)
    this.updateUser = this.updateUser.bind(this)
    this.logout = this.logout.bind(this)
    this.state = {
      firstName: "--",
      lastName: "--",
      photo: '',
      username: "--",
      // points: '',
    }
  }
  componentDidMount() {
    fetch('/self/?authentication_token=' +  sessionStorage.getItem('api_token'))
    .then(response => response.json())
    .then(this.updateUser)
   }

   updateUser(userData) {
    this.setState ({
      photo: userData.user.profile_image,
      firstName: userData.user.first_name,
      lastName: userData.user.last_name,
      username: userData.user.username
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
            <Link to="/alllegislators" className="linkStyle"><li className='navItems'>Legislators</li></Link>
            <Link to="/alllegislation" className="linkStyle"><li className='navItems'>Legislation</li></Link>
            <li className='dropdownText'>
            <DropdownButton title='' id="bg-nested-dropdown" className='glyphicon glyphicon-cog dropdownBtn'>
             <MenuItem eventKey="1"><Link to='/Settings'>Settings</Link></MenuItem>
             <MenuItem eventKey="2"><Link to="/" onClick={this.logout}>Logout</Link></MenuItem>
           </DropdownButton>
           </li>
          </ul>
        </div>
      </div>
    </div>
  }
}
export default ProfileHeader
