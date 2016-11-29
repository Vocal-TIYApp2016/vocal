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
          <img src='https://unsplash.it/400?random' alt='profile photo' className='img-responsive center-block img-circle' />
          <br />
          <h2>First Last</h2>
          <h5>Username | Points</h5>
        </div>
        <div className='col-sm-4'>
          <ul className='list-unstyled list-inline'>
            <li>Nav item</li>
            <li>Nav item</li>
            <li>Nav item</li>
          </ul>
        </div>
      </div>


    </div>
  }
}
export default ProfileHeader
