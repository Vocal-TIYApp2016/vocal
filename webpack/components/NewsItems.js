import React from 'react'
import { Router, Route, Link, browserHistory } from 'react-router'
import NewsItem from './NewsItem'

class NewsItems extends React.Component {
  constructor(props) {
    super(props)
    this.updateNews = this.updateNews.bind(this)
    this.state = {
      newsItems: []
    }
  }

  componentDidMount(){
    fetch('/articles')
    .then(response => response.json())
    // .then(response => console.log(response))
    .then(this.updateNews)
  }
  updateNews(response){
    this.setState({
      newsItems: response
    })
  }

  render() {
    console.log(this.state.newsItems)
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
