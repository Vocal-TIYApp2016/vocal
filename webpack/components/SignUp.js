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
      address: ''
    }
  }

  signUp () {
    var formData = new FormData()
    formData.append('user[first_name]', this.state.firstName)
    formData.append('user[last_name]', this.state.lastName)
    formData.append('user[email]', this.state.email)
    formData.append('user[username]', this.state.username)
    formData.append('user[password]', this.state.password)
    formData.append('user[profile_image]', this.state.photo)
    formData.append('user[address]', this.state.address)
    fetch('/users', {
      body: formData,
      method: 'POST'
    })
    .then(response => response.json())
    .then(this.signedupHandler)
  }

  signedupHandler(response) {
    sessionStorage.setItem('api_token', response.user.authentication_token)
    sessionStorage.setItem('email', response.user.email)
    sessionStorage.setItem('firstName', response.user.first_name)
    sessionStorage.setItem('lastName', response.user.last_name)
    sessionStorage.setItem('username', response.user.username)
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
                            <input type="text" id="email" name="email" className="fieldForm" required value={this.state.email} onChange={(e) => this.setState({email:e.target.value})} placeholder="EMAIL" />
                    </div>
                </div>
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
                        <label htmlFor="address"></label>
                            <input type="text" id="address" name="address" className="fieldForm" required value={this.state.address} onChange={(e) => this.setState({address:e.target.value})} placeholder="STREET, CITY, STATE" />
                    </div>
                </div>
                <div className="col-sm-12">
                    <div className="form-group">
                        <label htmlFor="photo" className="btn avatarText">Upload Avatar</label>
                            <input onChange={(e) => this.setState({photo: e.target.files[0]})} type="file" id="photo" name="photo" className="hideFileButton" required />
                    </div>
                </div>
                <div className="col-sm-12">
                    <div className="form-group">
                        <button id="signup" type="button" className="btn landingBtn signupBtn  block-center" onClick={this.signUp}>sign up</button>
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

export default SignUp
