import React from 'react'
import { Router, Route, Link, browserHistory } from 'react-router'

class SignIn extends React.Component {
  constructor(props) {
    super(props)
    this.signIn = this.signIn.bind(this)
    this.signedinHandler = this.signedinHandler.bind(this)
    this.state = {
      username: '',
      password: '',
    }
  }
    signIn () {
      var formData = new FormData()
      formData.append('login[username]', this.state.username)
      formData.append('login[password]', this.state.password)
      console.log(formData)
      fetch('/users/sign_in', {
        body: formData,
        method: 'POST'
      })
      .then(response => response.json())
      .then(this.signedinHandler)
  }
  signedinHandler(response) {
    sessionStorage.setItem('api_token', response.user.authentication_token)
    window.location.href = '/profile/legislation'
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
                <input type="password" id="password" name="password" className="fieldForm" required value={this.state.password} onChange={(e) => this.setState({password:e.target.value})} placeholder="PASSWORD" />
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
    </div>
  }
}
export default SignIn
