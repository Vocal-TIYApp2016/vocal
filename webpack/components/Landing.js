import React from 'react'
import { Router, Route, Link, browserHistory } from 'react-router'
import SignUp from './SignUp'
import SignIn from './SignIn'

class Landing extends React.Component {
  constructor(props){
    super(props)

  }


render() {
  return <div className="container-fluid">
          <h1 className="logoFont">vocal</h1>
            <div className="row text-center">
                <div className='col-sm-6 col-sm-offset-3'>
                  <Link to='/signup'>
                  <button className="btn landingBtn text-center">sign up</button>
                  </Link>
                  <Link to='/signin'>
                  <button className="btn landingBtn text-center">sign in</button>
                  </Link>
              </div>
            </div>
          </div>
}
}

export default Landing
