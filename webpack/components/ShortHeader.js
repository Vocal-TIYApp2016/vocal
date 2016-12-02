import React from 'react'
import { Router, Route, Link, browserHistory } from 'react-router'
import { DropdownButton, MenuItem } from 'react-bootstrap'

class ShortHeader extends React.Component {
  constructor(props) {
    super(props)
    this.updatePhoto = this.updatePhoto.bind(this)
    this.logout = this.logout.bind(this)
    this.state = {
      photo: null
    }
  }
  componentDidMount() {
    fetch('/self/?authentication_token=' +  sessionStorage.getItem('api_token'))
    .then(response => response.json())
    .then(this.updatePhoto)
   }

   updatePhoto(userData) {
    this.setState ({
      photo: userData.user.profile_image,
    })
   }

   logout(){
     sessionStorage.removeItem('user_id')
  }

  render(){
    return <div>
      <div className='row'>
        <div className='col-sm-6'>
          <h1 className='logoFont'>vocal</h1>
        </div>
        <div className='col-sm-6'>
          <ul className='text-right list-unstyled list-inline'>
            <Link to="/legislators" className="linkStyle"><li className='navItems'>Legislators</li></Link>
            <Link to="/legislation" className="linkStyle"><li className='navItems'>Legislation</li></Link>
            <span className='navItems dropdownText'>
            <DropdownButton title='' id="bg-nested-dropdown" className='glyphicon glyphicon-cog dropdownBtn'>
             <MenuItem eventKey="1"><Link to='/Settings'>Settings</Link></MenuItem>
             <MenuItem eventKey="2"><Link to="/" onClick={this.logout}>Logout</Link></MenuItem>
           </DropdownButton>
           </span>
            <Link className="linkStyleImg" to='/Profile'><li><img src={this.state.photo} alt='profile photo' className='img-responsive img-circle smlProfileImg' /></li></Link>
          </ul>
        </div>
      </div>
    </div>
  }
}
export default ShortHeader
