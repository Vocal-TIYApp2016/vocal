import React from 'react'
import { Router, Route, Link, browserHistory } from 'react-router'

class ProfileHeader extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      firstName: '',
      lastName: '',
      photo: '',
      username: '',
      // points: '',
    }
  }


  render(){
    return <div>
      <div className='row'>
        <div className='col-sm-4'>
          <h1 className='logoFont'>vocal</h1>
        </div>
        <div className='col-sm-4'>
          <img src='https://unsplash.it/400?random' alt='profile photo' className='img-responsive center-block img-circle profileImg' />
          <br />
          <h2 className="text-center profileText">First Last</h2>
          <h5 className="text-center profileTextTwo">Username | 200</h5>
        </div>
        <div className='col-sm-4'>
          <ul className='text-right list-unstyled list-inline'>
            <Link to="/legislators" className="linkStyle"><li className='navItems'>Legislators</li></Link>
            <Link to="/legislation" className="linkStyle"><li className='navItems'>Legislation</li></Link>
            <Link to="/settings" className="linkStyle"><li className='navItems'>Settings</li></Link>

          </ul>
        </div>
      </div>


    </div>
  }
}
export default ProfileHeader
