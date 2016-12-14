import React from 'react'
import { Router, Route, Link, browserHistory } from 'react-router'

class SignIn extends React.Component {
    constructor(props) {
        super(props)
        this.signIn = this.signIn.bind(this)
        this.signedinHandler = this.signedinHandler.bind(this)
        this.enter = this.enter.bind(this)
        this.state = {
            username: '',
            password: '',
        }
    }

    enter(event){
        if(event.key === "Enter" ){
            this.signIn()
        }
    }

    signIn () {
        var formData = new FormData()
        formData.append('login[username]', this.state.username)
        formData.append('login[password]', this.state.password)
        fetch('/users/sign_in/', {
          body: formData,
          method: 'POST'
        })
        .then(response => response.json())
        // .then(response => console.log(response))
        .then(this.signedinHandler)
    }
    signedinHandler(response) {
      if(response.user === undefined){
        alert(response.message)
        this.setState({
          username: '',
          password: ''
        })
      }
      sessionStorage.setItem('api_token', response.user.authentication_token)
      sessionStorage.setItem('email', response.user.email)
      sessionStorage.setItem('username', response.user.username)
      sessionStorage.setItem('firstName', response.user.first_name)
      sessionStorage.setItem('lastName', response.user.last_name)
      sessionStorage.setItem('photo', response.user.profile_image)
      location.href = '/profile/legislators'
    }
  render() {
    return <div>
    <div className="container-fluid">
      <h1 className="logoFont">vocal</h1>
      <div className="row text-center">
        <div className='col-sm-6 col-sm-offset-3'>
          <div className="row">
            <div className="col-sm-12">
              <div className="form-group">
                <label htmlFor="username"></label>
                  <input type="text" id="username" name="username" className="fieldForm" required value={this.state.username} onChange={(e) => this.setState({username:e.target.value})} placeholder="USERNAME" />
              </div>
            </div>
            <div className="col-sm-12">
              <div className="form-group">
                <label htmlFor="password"></label>
                  <input type="password" id="password" name="password" className="fieldForm" required value={this.state.password} onChange={(e) => this.setState({password:e.target.value})} placeholder="PASSWORD"  onKeyPress={this.enter} />
              </div>
            </div>
            <div className="col-sm-12">
              <div className="form-group">
                <button id="signup" type="button" className="btn landingBtn signupBtn  block-center" onClick={this.signIn}>sign in</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Link to="/" className="backArrow"><span className="glyphicon glyphicon-arrow-left" aria-hidden="true"></span></Link>
  </div>
  }
}

export default SignIn
