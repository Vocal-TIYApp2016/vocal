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
    this.updateUser()
    }

    updateUser() {
    this.setState ({
      photo: sessionStorage.getItem('photo'),
      lastName: sessionStorage.getItem('lastName'),
      firstName: sessionStorage.getItem('firstName'),
      username: sessionStorage.getItem('username')
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
