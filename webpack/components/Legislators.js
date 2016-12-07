import React from 'react'
import { Router, Route, Link, browserHistory } from 'react-router'
import Legislator from './Legislator'

class Legislators extends React.Component {
 constructor(props) {
   super(props)
   this.updateLegislators = this.updateLegislators.bind(this)
   this.state = {
     legislators: []
   }
 }

   componentDidMount() {
       fetch('/self?' + 'user_email=' + sessionStorage.getItem('email') + '&user_token=' +  sessionStorage.getItem('api_token'))
       .then(response => response.json())
       .then(this.updateLegislators)
   }

   updateLegislators(userData) {
      this.setState({
         legislators: userData.user.followed
      })
   }

 render() {
   var legislator = this.state.legislators.map((data, i) => {
     return <Legislator data={data} key={i} />
   })
   return <div>
   <div className='hiddenSection'>
     <div className="col-sm-3 columnContainer">
       <div className="text-center titleFont">Legislators</div>
         {legislator}
       </div>
     </div>
   </div>
 }
}

export default Legislators
