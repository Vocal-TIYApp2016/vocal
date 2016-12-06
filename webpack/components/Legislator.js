import React from 'react'
import { Router, Route, Link, browserHistory } from 'react-router'

class Legislator extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return <div>
    <div className="row legislatorInfo">
      <div className="col-xs-3 legislatorImg">
        <img className='img-circle' src={this.props.data.photo}/>
      </div>
      <div className="col-xs-6 legText text-center">
        {this.props.data.title}<br/>
         {this.props.data.firstName} {this.props.data.lastName}
      </div>
      <div className="col-xs-3">
        <button className='btn block-center btn-block followBtn pull-right'>+</button>
      </div>
     </div>
    </div>
  }
}

export default Legislator
