import React from 'react'
import { Router, Route, Link, browserHistory } from 'react-router'
import LegislatorBill from './LegislatorBill'
import Loading from 'react-loading'

class LegislatorBills extends React.Component {
  constructor(props) {
    super(props)
    this.updateLegislatorBills = this.updateLegislatorBills.bind(this)
    this.state = {
      legislatorBills: [],
      arrayLength: ''
    }
  }

   componentWillReceiveProps() {
      if (window.currentLegislatorProfile) {
        this.updateLegislatorBills(window.currentLegislatorProfile)
      }
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
      return <div className='hiddenSection'>
               <div className="col-sm-3 columnContainer">
                 <div className="titleFont text-center">Legislation</div>
                  <div className='profileBox' id="committeeBox">
                   {/* <button className="btn avatarText text-center center-block" id="profileAvatarTextBtn">loading<br/> legislators</button> */}
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
