import React from 'react'
import { Router, Route, Link, browserHistory } from 'react-router'

class ProfileHeader extends React.Component {
  constructor(props) {
    super(props)
    this.updateUser = this.updateUser.bind(this)
    this.state = {
      firstName: '',
      lastName: '',
      photo: '',
      username: '',
      // points: '',
    }
  }
  componentDidMount() {
       var user = JSON.parse(sessionStorage.getItem('user'))
       fetch('https://still-springs-37963.herokuapp.com/users/me?api_token=' + sessionStorage.getItem('api_token'))
       // adding the username of whoever signed up/logged in to the fetch URL.
       .then(response => response.json())
       // .then(response => console.log(response))
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
