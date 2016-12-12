import React from 'react'
import { Router, Route, Link, browserHistory } from 'react-router'
import NewsItem from './NewsItem'
import ProfileHeader from './ProfileHeader'

class MobileNewsItems extends React.Component {
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

export default MobileNewsItems
