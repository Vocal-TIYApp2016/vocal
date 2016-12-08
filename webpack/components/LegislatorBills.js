import React from 'react'
import { Router, Route, Link, browserHistory } from 'react-router'
import LegislatorBill from './LegislatorBill'

class LegislatorBills extends React.Component {
  constructor(props) {
    super(props)
    this.updateLegislatorBills = this.updateLegislatorBills.bind(this)
    this.state = {
      legislatorBills: []
    }
  }
  componentDidMount() {
    // fetch('/legislators/' +  sessionStorage.getItem('legislator_id'))
    // .then(response => response.json())
    // .then(this.updateLegislatorBills)
    // .then(response => console.log(response))
   }

   componentWillReceiveProps() {
      if (window.currentLegislatorProfile) {
        this.updateLegislatorBills(window.currentLegislatorProfile)
      }
    }

   updateLegislatorBills(data) {
     this.setState ({
       legislatorBills: data.legislator.authored_expanded
     })
    //  console.log(this.state.legislatorBills)
   }

  render() {
    var bill = this.state.legislatorBills.map((data, i) => {
      return <LegislatorBill data={data} key={i} />
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
