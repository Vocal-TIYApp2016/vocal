import React from 'react'
import { Router, Route, Link, browserHistory } from 'react-router'

class UserInfo extends React.Component {
 constructor(props) {
   super(props)
   this.updateUser = this.updateUser.bind(this)
   this.state = {
     firstName: "--",
     lastName: "--",
     photo: '',
     username: "--",
   }
 }

   componentDidMount() {
     fetch('/self?' + 'user_email=' + sessionStorage.getItem('email') + '&user_token=' +  sessionStorage.getItem('api_token'))
     .then(response => response.json())
    //  .then(this.updateUser)
     .then(response => console.log(response))
    }

    updateUser(userData) {
    this.setState ({
      photo: userData.user.profile_image,
      firstName: userData.user.first_name,
      lastName: userData.user.last_name,
      username: userData.user.username
    })
   }

 render() {
   return <div className='hiddenSection'>
        <div className="leftSide">
            <div className="row">
                <div className="col-sm-4">
                    <img src={this.state.photo} className="img-circle img-responsive userProfileImg" alt="user avatar photo" />
                </div>
                <div className="col-sm-8"><br/>
                   <div className="titleFont" id="nameFont">{this.state.firstName} {this.state.lastName}</div>
                   <div className="legText" id="usernameFont">{this.state.username}</div>
                </div>
            </div>
        </div>
    </div>
   }
}

export default UserInfo
