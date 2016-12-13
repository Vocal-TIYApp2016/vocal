import React from 'react'
import { Router, Route, Link, browserHistory } from 'react-router'
import SignUp from './SignUp'
import SignIn from './SignIn'

class Landing extends React.Component {
  constructor(props){
    super(props)
  }

render() {
  return <div>
          <div className="container-fluid">
            <h1 className="logoFont">vocal</h1>
              <div className="row mobLandingBtnRow">
                  <div className='col-sm-6 mobLandingBtnUpRight'>
                    <Link to='/signup'>
                    <button className="btn landingBtn mobLandingBtnUp">sign up</button>
                    </Link>
                  </div>
                  <div className='col-sm-6 mobLandingBtnIn'>
                    <Link to='/signin'>
                    <button className="btn landingBtn text-center mobLandingBtnIn">sign in</button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
}
}

export default Landing
