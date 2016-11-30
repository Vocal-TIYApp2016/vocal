import React from 'react'
import { Router, Route, Link, browserHistory } from 'react-router'
import Legislation from './Legislation'

class LegislatorBills extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      legislatorBills: [
        {
        billName: 'HB1001',
        billDesc: 'lorem ;aslkdfjasd;lfkjasdlkfjsdlkfjsdlkfoiuewrijdsfncxvlkjdsfoiuewkljdsfiojewr',
      },
      {
        billName: 'HB1002',
        billDesc: 'lorem sjflkdsjf,cmnxlkjsdfiouerwkjndndlkdjsflkjewoiutdsknsf,dnvkdjlfkjdsfklsdlkjh',
    }
    ]
    }
  }

  render() {
    var bill = this.state.legislatorBills.map((data, i) => {
      return <Legislation data={data} key={i} />
    })
    return <div>
      <div  className="col-sm-3 columnContainer">
        <div className="text-center titleFont">Legislation</div>
          <div className='profileBox'>
          {bill}
          </div>
      </div>
    </div>
  }
}

export default LegislatorBills
