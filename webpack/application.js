import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, Link, browserHistory } from 'react-router'
import Landing from './components/Landing'
import SignUp from './components/SignUp'
import SignIn from './components/SignIn'
import Profile from './components/Profile'
import LegislatorProfile from './components/LegislatorProfile'
import AllLegislations from './components/AllLegislations'
import AllLegislators from './components/AllLegislators'
import Settings from './components/Settings'
import MobileLegislations from './components/MobileLegislations'
import MobileLegislators from './components/MobileLegislators'
import MobileNewsItems from './components/MobileNewsItems'

document.addEventListener('DOMContentLoaded', function(event) {
   ReactDOM.render(
       <Router history = {browserHistory}>
           <Route path='/' component={Landing} />
           <Route path='/signup' component={SignUp} />
           <Route path='/signin' component={SignIn} />
           <Route path='/profile' component={Profile}>
               <Route path='legislation' component={MobileLegislations} />
               <Route path='news' component={MobileNewsItems} />
               <Route path='legislators' component={MobileLegislators} />
           </Route>
           <Route path='/legislatorprofile' component={LegislatorProfile} />
           <Route path='/alllegislation' component={AllLegislations} />
           <Route path='/alllegislators' component={AllLegislators} />
           <Route path='/settings' component={Settings} />
       </Router> ,
       document.querySelector('#app')
   )
})

console.log('hello')
