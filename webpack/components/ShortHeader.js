import React from 'react'
import { Router, Route, Link, browserHistory } from 'react-router'

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
    fetch('/users/' +  sessionStorage.getItem('user_id'))
    .then(response => response.json())
    .then(this.updatePhoto)
   }

   updatePhoto(userData) {
    this.setState ({
      photo: userData.profile_image,
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
            <Link to="/settings" className="linkStyle"><li className='navItems'>Settings</li></Link>
            <Link to="/" className="linkStyle" onClick={this.logout}><li className='navItems'>Logout</li></Link>
            <Link className="linkStyle" to='/Profile'><li><img src='https://unsplash.it/400?random' alt='profile photo' className='img-responsive img-circle smlProfileImg' /></li></Link>
          </ul>
        </div>
      </div>
    </div>
  }
}
export default ShortHeader
