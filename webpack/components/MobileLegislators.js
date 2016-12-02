import React from 'react'
import { Router, Route, Link, browserHistory } from 'react-router'
import Legislator from './Legislator'
import ProfileHeader from './ProfileHeader'

class MobileLegislators extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      legislators: [
        {
        firstName: 'Sally',
        lastName: 'Wieland',
        title: 'Bosswoman',
        photo: 'https://unsplash.it/400?random'
      },
      {
      firstName: 'Kyle',
      lastName: 'Huff',
      title: 'Bossman',
      photo: 'https://unsplash.it/400?random'
    }
    ]
    }
  }

  render() {
    var legislator = this.state.legislators.map((data, i) => {
      return <Legislator data={data} key={i} />
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
      <div className="col-xs-12 columnContainer">
         <div className='profileBox'>
          {legislator}
          </div>
        </div>

    </div>
  }
}

export default MobileLegislators
