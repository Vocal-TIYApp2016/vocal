import React from 'react'
import { Router, Route, Link, browserHistory } from 'react-router'

class Legislator extends React.Component {
 constructor(props) {
   super(props)
   this.showLegislator = this.showLegislator.bind(this)
 }

 showLegislator(response) {
   sessionStorage.removeItem('legislator_id', this.props.data.id)
   sessionStorage.setItem('legislator_id', this.props.data.id)
   window.location.href = '/legislatorprofile/committees'
}

 render() {
   return <div>
   <div className="row legislatorInfo" onClick={this.showLegislator}>
     <div className="col-sm-4 legislatorImg">
       <img className='img-circle' src={this.props.data.leg_image_id} alt="legislator image"/>
     </div>
     <span className="col-sm-8 legText">
       {this.props.data.title} {this.props.data.first_name} {this.props.data.last_name}
     </span>
    </div>
   </div>
 }
}

export default Legislator
