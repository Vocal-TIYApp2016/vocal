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
            <h1 className="logoFont">vocal</h1><br/><br/>
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
            <div className="row">
            <div className="col-sm-2"></div>
            <div className="col-sm-8">
              <div className="fieldForm text-center">Vocal is a local civics education app, focusing on the Indiana state legislature and their activity.</div><br/><br/>
              <div className="row">
                <div className="col-sm-4 whiteBackground text-center" id="landingPage">
                      <div className="fa fa-user fa-4x"></div><hr/>
                      <div className="text-left">Follow Indiana legislators to learn more about what your representatives are busy with.</div><hr/>
                </div>
                <div className="col-sm-4 whiteBackground text-center" id="landingPage">
                      <div className="fa fa-university fa-4x"></div><hr/>
                      <div className="text-left">Read up on Indiana legislation to learn what your followed legislators are doing.</div><hr/>
                </div>
                <div className="col-sm-4 whiteBackground text-center" id="landingPage">
                      <div className="fa fa-newspaper-o fa-4x"></div><hr/>
                        <div className="text-left">Keep up to date with an updated news feed that pulls articles from Indiana news sources.</div><hr/>
                </div>
              </div>
            </div>
            <div className="col-sm-2"></div>
            </div>
              </div>
            </div>
}
}

export default Landing
