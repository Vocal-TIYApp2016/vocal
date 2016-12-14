import React from 'react'
import { Router, Route, Link, browserHistory } from 'react-router'
import LegislatorBill from './LegislatorBill'
import URL from 'url-parse'
import Loading from 'react-loading'

class MobileLegLegislations extends React.Component {
    constructor(props) {
        super(props)
        let url = new URL(window.location.href, true)
        this.updateLegislatorBills = this.updateLegislatorBills.bind(this)
        this.state = {
            legislatorBills: [],
            url: url,
            arrayLength: ''
        }
    }

    componentDidMount() {
        fetch('/legislators/' +  this.state.url.query.id)
        .then(response => response.json())
        .then(this.updateLegislatorBills)
    }

    updateLegislatorBills(data) {
        this.setState ({
            legislatorBills: data.legislator.authored_expanded,
            arrayLength: Number(data.legislator.authored_expanded.length)
        })
    }

  render() {
    if(this.state.arrayLength != 0) {
      var bill = this.state.legislatorBills.map((data, i) => {
        return <LegislatorBill data={data} key={i} />
      })
    }
    else {
      return <div className="col-xs-12 columnContainer">
        <div className="profileBox" id="committeeBox">
          <Loading type='bubbles' color='#223843' />
        </div>
      </div>
    }
    return <div className="col-xs-12 columnContainer">
        <div className='profileBox' id="committeeBox">
            {bill}
        </div>
    </div>
  }
}

export default MobileLegLegislations
