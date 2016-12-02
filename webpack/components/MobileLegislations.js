import React from 'react'
import { Router, Route, Link, browserHistory } from 'react-router'
import Legislation from './Legislation'
import ProfileHeader from './ProfileHeader'

class MobileLegislations extends React.Component {
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
      <ProfileHeader />
      <div className="mobileReveal">
        <div className='col-xs-4 noPadding'>
        <Link to='/legislators'><button className='btn btn-block mobileNavbar'>Legislators</button></Link>
        </div>
        <div className='col-xs-4'>
        <Link to='/news'><button className='btn btn-block mobileNavbar'>News Feed</button></Link>
        </div>
        <div className='col-xs-4'>
        <Link to='/legislation'><button className='btn btn-block mobileNavbar'>Legislation</button></Link>
        </div>
      </div>
      <div  className="col-xs-12 columnContainer">
          <div className='profileBox'>
          {bill}
          </div>
      </div>

    </div>
  }
}

export default MobileLegislations
