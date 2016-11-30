import React from 'react'
import { Router, Route, Link, browserHistory } from 'react-router'
import NewsItem from './NewsItem'

class LegislatorNewsItems extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      LegislatorNewsItems: [
        {
        headline: 'lorem lorem lorem lorem',
        source: 'New york times',
        date: '12/1/16',
      },
      {
      headline: 'lorem lorem LEGISLATOR lorem lorem headline',
      source: 'cnn',
      date: '12/3/16',
    }
    ]
    }
  }

  render() {
    var news = this.state.LegislatorNewsItems.map((data, i) => {
      return <NewsItem data={data} key={i} />
    })
    return <div>
      <div className="col-sm-6 columnContainer">
        <div className="text-center titleFont">News Feed</div>
        <div className='profileBox'>
          {news}
          </div>
      </div>
    </div>
  }
}

export default LegislatorNewsItems
