import React from 'react'
import { Router, Route, Link, browserHistory } from 'react-router'
import LegislatorBill from './LegislatorBill'

class MobileLegLegislations extends React.Component {
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
        .then(this.updateLegislatorBills)
    }

    updateLegislatorBills(data) {
        this.setState ({
            legislatorBills: data.legislator.authored_expanded
        })
    }

  render() {
    var bill = this.state.legislatorBills.map((data, i) => {
      return <LegislatorBill data={data} key={i} />
    })
    return <div className="col-xs-12 columnContainer">
        <div className='profileBox'>
            {bill}
        </div>
    </div>
  }
}

export default MobileLegLegislations
