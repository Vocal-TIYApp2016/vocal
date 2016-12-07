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
     <div className="col-xs-2 legislatorImg border">
       <img className='img-circle' src={this.props.data.leg_image_id} alt="legislator image"/>
     </div>
     <div className="col-xs-10 legText border">
       {this.props.data.title}<br/>
       {this.props.data.first_name} {this.props.data.last_name}
     </div>
    </div>
   </div>
 }
}

export default Legislator
