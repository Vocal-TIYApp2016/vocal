import React from 'react'
import { Router, Route, Link, browserHistory } from 'react-router'
import NewsItem from './NewsItem'
import ProfileHeader from './ProfileHeader'

class MobileNewsItems extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      newsItems: [
        {
        headline: 'lorem lorem lorem lorem',
        source: 'New york times',
        date: '12/1/16',
      },
      {
      headline: 'lorem lorem lorem lorem headline',
      source: 'cnn',
      date: '12/3/16',
    }
    ]
    }
  }

  render() {
    var news = this.state.newsItems.map((data, i) => {
      return <NewsItem data={data} key={i} />
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
          {news}
          </div>
      </div>
    </div>
  }
}

export default MobileNewsItems
