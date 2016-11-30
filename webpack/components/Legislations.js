import React from 'react'
import { Router, Route, Link, browserHistory } from 'react-router'
import Legislation from './Legislation'

class Legislations extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      allBills: [
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
    var bill = this.state.allBills.map((data, i) => {
      return <Legislation data={data} key={i} />
    })
    return <div>
      <div  className="col-sm-3">
        <div className="text-center titleFont">Legislation</div>
          <div className='profileBox'>
          {bill}
          </div>
      </div>
    </div>
  }
}

export default Legislations
