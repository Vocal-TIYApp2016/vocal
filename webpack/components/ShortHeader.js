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
    this.updatePhoto()
   }

   updatePhoto() {
    this.setState ({
      photo: sessionStorage.getItem('photo'),
    })
   }

   logout(){
     sessionStorage.removeItem('user_id')
     sessionStorage.removeItem('api_token')
     sessionStorage.removeItem('photo')
     sessionStorage.removeItem('firstName')
     sessionStorage.removeItem('lastName')
     sessionStorage.removeItem('username')
     sessionStorage.removeItem('email')
  }

  render(){
    return <div>
        <div className='hiddenSection'>
            <div className='row'>
                <div className='col-sm-12'>
                    <Link to="/profile/legislators"><h1 className='logoFont'>vocal</h1></Link>
                        <ul className='inlineHeader pull-right list-unstyled list-inline'>
                            <Link to="/alllegislators" className="linkStyle"><li className='navItems'>Legislators</li></Link>
                            <Link to="/alllegislation" className="linkStyle"><li className='navItems'>Legislation</li></Link>
                            <span className='navItems dropdownText'>
                                <DropdownButton title='' id="bg-nested-dropdown" className='glyphicon glyphicon-cog dropdownBtn'>
                                    <MenuItem eventKey="1" href='/settings'>Settings</MenuItem>
                                    <MenuItem eventKey="2" href='/' onClick={this.logout}>Logout</MenuItem>
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
                  <Link to="/profile/legislators"><h1 className='logoFont text-left'>vocal</h1></Link>
                        <div className='pull-right'>
                          <DropdownButton title='' id="bg-nested-dropdown" className='glyphicon glyphicon-cog dropdownBtn'>
                            <MenuItem eventKey="1" href="/profile/legislators"><img src={this.state.photo} className="img-responsive img-circle userDropdownImg" alt="user avatar photo"/></MenuItem>
                            <MenuItem eventKey="2" href="/alllegislators">Legislators</MenuItem>
                            <MenuItem eventKey="2" href="/alllegislation">Legislation</MenuItem>
                            <MenuItem eventKey="3" href="/settings">Settings</MenuItem>
                            <MenuItem eventKey="4" href="/" onClick={this.logout}>Logout</MenuItem>
                          </DropdownButton>
                        </div>
                </div>
            </div>
        </div>
    </div>
  }
}

export default ShortHeader
