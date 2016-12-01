import React from 'react'
import { Router, Route, Link, browserHistory } from 'react-router'
import NewsItem from './NewsItem'

class NewsItems extends React.Component {
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
    return <div className='hiddenSection'>
      <div className="col-sm-6 columnContainer">
        <div className="text-center titleFont">News Feed</div>
        <div className='profileBox'>
          {news}
          </div>
      </div>
    </div>
  }
}

export default NewsItems
