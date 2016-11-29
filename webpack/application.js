import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, Link, browserHistory } from 'react-router'
import Landing from './components/Landing'
import SignUp from './components/SignUp'
import SignIn from './components/SignIn'


document.addEventListener('DOMContentLoaded', function(event) {
   ReactDOM.render(
       <Router history = {browserHistory}>
           <Route path='/' component={Landing} />
           <Route path='/signup' component={SignUp} />
           <Route path='/signin' component={SignIn} />
       </Router> ,
       document.querySelector('#app')
   )
})

console.log('hello')
