import React from 'react'
import { Router, Route, Link, browserHistory } from 'react-router'
import { DropdownButton, MenuItem } from 'react-bootstrap'

class LegislatorHeader extends React.Component {
  constructor(props) {
    super(props)
    this.updateLegislator = this.updateLegislator.bind(this)
    this.updatePhoto = this.updatePhoto.bind(this)
    this.logout = this.logout.bind(this)
    this.follow = this.follow.bind(this)
    this.updateFollowBtn = this.updateFollowBtn.bind(this)
    this.state = {
      title: "--",
      firstName: "--",
      lastName: "--",
      photo: null,
      party: "--",
      userPhoto: null,
      updateFollowBtn: 'follow'
    }
  }
  componentDidMount() {
    fetch('/self?' + 'user_email=' + sessionStorage.getItem('email') + '&user_token=' +  sessionStorage.getItem('api_token'))
    .then(response => response.json())
    .then((response) => {
      this.updateFollowBtn(response)
    })
    this.updatePhoto()
   }

   componentWillReceiveProps() {
     if (window.currentLegislatorProfile) {
       this.updateLegislator(window.currentLegislatorProfile)
     }
   }

   updateLegislator(userData) {
    this.setState ({
      photo: userData.legislator.leg_image,
      firstName: userData.legislator.first_name,
      lastName: userData.legislator.last_name,
      party: userData.legislator.party,
      title: userData.legislator.title
    })
   }

    updatePhoto(userData) {
     this.setState ({
       userPhoto: sessionStorage.getItem('photo'),
     })
    }

    updateFollowBtn(userData) {
      var followBtn = 'follow'
      userData.user.legislators.forEach(function(data) {
          if (data.full_name === sessionStorage.getItem('full_name')) {
            followBtn = 'unfollow'
          }
      })
      this.setState({
        updateFollowBtn: followBtn
      })
    }

  logout(){
    sessionStorage.removeItem('user_id')
  }

  follow(){
    this.setState({
      updateFollowBtn: '...'
    })
    var formData = new FormData()
    formData.append('legislator[full_name]', sessionStorage.getItem('full_name'))
    formData.append('user[authentication_token]', sessionStorage.getItem('api_token'))
    formData.append('user[email]', sessionStorage.getItem('email'))

    fetch('/legislators/' +  sessionStorage.getItem('full_name') + '/follow?' + 'user_email=' + sessionStorage.getItem('email') + '&user_token=' + sessionStorage.getItem('api_token'), {
      body: formData,
      method: 'POST'
    })
    .then(response => response.json())
    .then(this.updateFollowBtn)
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
                       <MenuItem eventKey="1" href='/settings'>Settings</MenuItem>
                       <MenuItem eventKey="2" href="/" onClick={this.logout}>Logout</MenuItem>
                     </DropdownButton>
                     </span>
                      <Link className="linkStyleImg" to='/profile/legislators'><li><img src={this.state.userPhoto} alt='profile photo' className='img-responsive img-circle smlProfileImg' /></li></Link>
                    </ul>
                </div>
              </div>
              <div className="row">
                <div className='col-sm-12'>
                  <img src={this.state.photo} id="fixedPhoto" alt='profile photo' className='center-block img-circle profileImg img-responsive' />
                  <br />
                  <h2 className="text-center profileText">{this.state.title}<br/>
                  {this.state.firstName} {this.state.lastName}</h2>
                  <h5 className="text-center profileTextTwo">{this.state.party} | <button className="btn followBtn" onClick={this.follow}>{this.state.updateFollowBtn}</button></h5>
                </div>
              </div>
            </div>
              <div className='mobileReveal'>
                <div className='row'>
                  <div className='col-xs-12'>
                    <h1 className='logoFont text-left'>vocal</h1>
                    <div className='pull-right'>
                    <DropdownButton title='' id="bg-nested-dropdown" className='glyphicon glyphicon-cog dropdownBtn'>
                    <MenuItem eventKey="1" href='/profile/legislators'><img src={this.state.userPhoto} className="img-responsive img-circle userDropdownImg" alt="user avatar photo"/>
                    </MenuItem>
                    <MenuItem eventKey="2" href='/alllegislators'>Legislators</MenuItem>
                     <MenuItem eventKey="2" href='/alllegislation'>Legislation</MenuItem>
                     <MenuItem eventKey="3" href='/settings'>Settings</MenuItem>
                     <MenuItem eventKey="4" href='/' onClick={this.logout}>Logout</MenuItem>
                   </DropdownButton>
                    </div>
                  </div>
                </div>
                <div className='row'>
                  <div className='col-xs-12'>
                  <img src={this.state.photo} alt='profile photo' className='img-responsive center-block img-circle profileImg' />
                  <br />
                  <h2 className="text-center profileText">{this.state.title}<br/>
                  {this.state.firstName} {this.state.lastName}</h2>
                  <h5 className="text-center profileTextTwo">{this.state.party} | <button className="btn followBtn" onClick={this.follow}>{this.state.updateFollowBtn}</button></h5>
                 </div>
                </div>
              </div>
             </div>
  }
}
export default LegislatorHeader
