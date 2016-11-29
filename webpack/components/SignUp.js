import React from 'react'
import { Router, Route, Link, browserHistory } from 'react-router'

class SignUp extends React.Component {
  constructor(props) {
    super(props)
    this.signUp = this.signUp.bind(this)
    this.signedupHandler = this.signedupHandler.bind(this)
    this.state = {
      firstName: '',
      lastName: '',
      username: '',
      email: '',
      password: '',
      photo: null,
      zip: ''
    }
  }

  signUp () {
    var formData = new FormData()
    formData.append('first_name', this.state.firstName)
    formData.append('last_name', this.state.lastName)
    formData.append('email', this.state.email)
    formData.append('username', this.state.username)
    formData.append('password', this.state.password)
    formData.append('password_confirmation', this.state.confirmPassword)
    formData.append('profile_image', this.state.photo)
    formData.append('zip_code', this.state.zip)
    console.log(formData)
    fetch('/users', {
      body: formData,
      method: 'POST'
    })
    .then(response => response.json())
    // .then(response => console.log(response))
    .then(this.signedupHandler)
  }
  signedupHandler(response) {
    sessionStorage.setItem('api_token', response.authentication_token)
    sessionStorage.setItem('user', JSON.stringify(response.username))
    // window.location.href = '/Profile'
  }
  render() {
    return <div>
      <div className="container-fluid">
        <h1 className="logoFont">vocal</h1>
          <div className="row text-center">
            <div className='col-sm-6 col-sm-offset-3'>
            <div className="row">
              <div className="col-sm-6">
                <div className="form-group">
                  <label htmlFor="firstName"></label>
                    <input type="text" id="firstName" name="firstName" className="fieldForm" required value={this.state.firstname} onChange={(e) => this.setState({firstName:e.target.value})} placeholder="FIRST" />
                </div>
              </div>
              <div className="col-sm-6">
                <div className="form-group">
                  <label htmlFor="lastName"></label>
                    <input type="text" id="lastName" name="lastName" className="fieldForm" required value={this.state.lastname} onChange={(e) => this.setState({lastName:e.target.value})} placeholder="LAST" />
                </div>
              </div>
              <div className="col-sm-12">
                <div className="form-group">
                  <label htmlFor="email"></label>
                    <input type="text" id="email" name="email" className="fieldForm" required value={this.state.email} onChange={(e) => this.setState({email:e.target.value})} placeholder="email" />
                </div>
              </div>
              <div className="col-sm-12">
                <div className="form-group">
                  <label htmlFor="username"></label>
                    <input type="text" id="username" name="username" className="fieldForm" required value={this.state.username} onChange={(e) => this.setState({username:e.target.value})} placeholder="username" />
                </div>
              </div>
              <div className="col-sm-12">
                <div className="form-group">
                  <label htmlFor="password"></label>
                    <input type="password" id="password" name="password" className="fieldForm" required value={this.state.password} onChange={(e) => this.setState({password:e.target.value})} placeholder="password" />
                </div>
              </div>
              <div className="col-sm-6">
                <div className="form-group">
                  <label htmlFor="zip"></label>
                    <input type="text" id="zip" name="zip" className="fieldForm" required value={this.state.zip} onChange={(e) => this.setState({zip:e.target.value})} placeholder="zip" />
                </div>
              </div>
              <div className="col-sm-6">
                <div className="form-group">
                  <label htmlFor="photo" className="btn avatarText">Upload Avatar</label>
                    <input onChange={(e) => this.setState({photo: e.target.files[0]})} type="file" id="photo" name="photo" className="hideFileButton" required />
                </div>
              </div>
              <div className="col-sm-12">
                <div className="form-group">
                    <Link to='/profile'>
                    <button id="signup" type="button" className="btn landingBtn signupBtn  block-center" onClick={this.signUp}>sign up</button>
                    </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  }
}
export default SignUp
