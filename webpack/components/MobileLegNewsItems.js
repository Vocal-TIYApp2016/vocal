import React from 'react'
import { Router, Route, Link, browserHistory } from 'react-router'
import NewsItem from './NewsItem'

class MobileLegNewsItems extends React.Component {
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

      <div className="col-xs-12 columnContainer">
        <div className='profileBox'>
          {news}
          </div>
      </div>
    </div>
  }
}

export default MobileLegNewsItems
