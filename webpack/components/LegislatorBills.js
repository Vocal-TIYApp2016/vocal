import React from 'react'
import { Router, Route, Link, browserHistory } from 'react-router'
import Legislation from './Legislation'

class LegislatorBills extends React.Component {
  constructor(props) {
    super(props)
    this.updateLegislatorBills = this.updateLegislatorBills.bind(this)
    this.state = {
      legislatorBills: []
    }
  }
  componentDidMount() {
    fetch('/legislators/' +  sessionStorage.getItem('legislator_id'))
    .then(response => response.json())
    // .then(this.updateCommittees)
    .then(response => console.log(response))
   }
   updateLegislatorBills(data) {
     this.setState ({
       committees: data.legislator.committees
     })
   }

  render() {
    var bill = this.state.legislatorBills.map((data, i) => {
      return <Legislation data={data} key={i} />
    })
    return <div>
    <div className='hiddenSection'>
      <div  className="col-sm-3 columnContainer">
        <div className="text-center titleFont">Legislation</div>
          <div className='profileBox'>
          {bill}
          </div>
      </div>
    </div>
    </div>
  }
}

export default LegislatorBills
