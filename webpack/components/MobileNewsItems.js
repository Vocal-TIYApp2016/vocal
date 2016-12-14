import React from 'react'
import { Router, Route, Link, browserHistory } from 'react-router'
import NewsItem from './NewsItem'
import ProfileHeader from './ProfileHeader'
import Loading from 'react-loading'

class MobileNewsItems extends React.Component {
    constructor(props) {
        super(props)
        this.updateNews = this.updateNews.bind(this)
        this.state = {
            newsItems: [],
            arrayLength: ''
        }
    }

    componentDidMount() {
        fetch('/articles?' + 'user_email=' + sessionStorage.getItem('email') + '&user_token=' +  sessionStorage.getItem('api_token'))
        .then(response => response.json())
        .then(this.updateNews)
    }

    updateNews(response) {
        this.setState({
            newsItems: response.articles,
            arrayLength: Number(response.articles.length)
        })
    }

  render() {
    if(this.state.arrayLength != 0) {
      var news = this.state.newsItems.map((data, i) => {
        return <NewsItem data={data} key={i} />
      })
    }
    else {
      return <div className="col-xs-12 columnContainer">
        <div className='profileBox'>
          <div className="loadingIcon">
            <Loading type='bubbles' color='#223843' />
          </div>
        </div>
      </div>
    }
    return <div className="col-xs-12 columnContainer">
        <div className='profileBox'>
            {news}
        </div>
    </div>
  }
}

export default MobileNewsItems
