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
    <div className='hiddenSection'>
      <div className='row'>
        <div className='col-sm-12'>
          <h1 className='logoFont'>vocal</h1>
          <ul className='inlineHeader pull-right list-unstyled list-inline'>
            <Link to="/alllegislators" className="linkStyle"><li className='navItems'>Legislators</li></Link>
            <Link to="/alllegislation" className="linkStyle"><li className='navItems'>Legislation</li></Link>
            <span className='navItems dropdownText'>
            <DropdownButton title='' id="bg-nested-dropdown" className='glyphicon glyphicon-cog dropdownBtn'>
             <MenuItem eventKey="1"><Link to='/settings'>Settings</Link></MenuItem>
             <MenuItem eventKey="2"><Link to="/" onClick={this.logout}>Logout</Link></MenuItem>
           </DropdownButton>
           </span>
            <Link className="linkStyleImg" to='/profile/legislators'><li><img src={this.state.photo} alt='profile photo' className='img-responsive img-circle smlProfileImg' /></li></Link>
          </ul>
      </div>
      </div>
      </div>
      <div className='mobileReveal'>
        <div className='row'>
          <div className='col-xs-12'>
            <h1 className='logoFont text-left'>vocal</h1>
            <div className='pull-right'>
            <DropdownButton title='' id="bg-nested-dropdown" className='glyphicon glyphicon-cog dropdownBtn'>
             <MenuItem eventKey="1"><Link to='/profile/legislators'>Profile</Link></MenuItem>
             <MenuItem eventKey="2"><Link to='/alllegislators'>Legislators</Link></MenuItem>
             <MenuItem eventKey="2"><Link to='/alllegislation'>Legislation</Link></MenuItem>
             <MenuItem eventKey="3"><Link to='/settings'>Settings</Link></MenuItem>
             <MenuItem eventKey="4"><Link to="/" onClick={this.logout}>Logout</Link></MenuItem>
           </DropdownButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  }
}
export default ShortHeader
