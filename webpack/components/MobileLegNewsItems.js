import React from 'react'
import { Router, Route, Link, browserHistory } from 'react-router'
import NewsItem from './NewsItem'
import Loading from 'react-loading'

class MobileLegNewsItems extends React.Component {
    constructor(props) {
    super(props)
        this.updateNews = this.updateNews.bind(this)
        this.state = {
          legislatorNewsItems: [],
          arrayLength: ''
        }
    }
    componentDidMount(){
        fetch('/articles?' + 'user_email=' + sessionStorage.getItem('email') + '&user_token=' +  sessionStorage.getItem('api_token'))
        .then(response => response.json())
        .then(this.updateNews)
    }

    updateNews(response){
        this.setState({
          legislatorNewsItems: response.articles,
          arrayLength: Number(response.articles.length)
        })
    }

  render() {
    if(this.state.arrayLength != 0) {
      var news = this.state.legislatorNewsItems.map((data, i) => {
        return <NewsItem data={data} key={i} />
      })
    }
    else {
      return <div className="col-xs-12 columnContainer">
        <div className="profileBox" id="committeeBox">
          <Loading type='bubbles' color='#223843' />
        </div>
      </div>
    }
    return <div className="col-xs-12 columnContainer">
        <div className='profileBox' id="committeeBox">
            {news}
        </div>
    </div>
  }
}

export default MobileLegNewsItems
