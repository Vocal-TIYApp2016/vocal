import React from 'react'
import { Router, Route, Link, browserHistory } from 'react-router'
import LegislatorCommittee from './LegislatorCommittee'
import Loading from 'react-loading'

class LegislatorCommittees extends React.Component {
  constructor(props) {
    super(props)
    this.updateCommittees = this.updateCommittees.bind(this)
    this.state = {
      committees: [],
      arrayLength: ''
  }
}

   componentWillReceiveProps() {
     if (window.currentLegislatorProfile) {
       this.updateCommittees(window.currentLegislatorProfile)
     }
   }

   updateCommittees(data) {
     this.setState ({
       committees: data.legislator.committees,
       arrayLength: Number(data.legislator.committees.length)
     })
   }

  render() {
    if(this.state.arrayLength != 0) {
      var committee = this.state.committees.map((data, i) => {
        return <LegislatorCommittee data={data} key={i} />
      })
    }
    else {
      return <div className='hiddenSection'>
               <div className="col-sm-3 columnContainer">
                 <div className="titleFont text-center">Committees</div>
                  <div className='profileBox' id="committeeBox">
                    <div className="loadingIcon">
                      <Loading type='bubbles' color='#223843' />
                    </div>
                 </div>
              </div>
            </div>
    }
    return <div>
            <div className='hiddenSection'>
              <div  className="col-sm-3 columnContainer">
                <div className="text-center titleFont">Committees</div>
                 <div className='profileBox' id="committeeBox">
                  {committee}
                 </div>
              </div>
            </div>
           </div>
  }
}

export default LegislatorCommittees
