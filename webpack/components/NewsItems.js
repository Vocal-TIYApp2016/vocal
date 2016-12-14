import React from 'react'
import { Router, Route, Link, browserHistory } from 'react-router'
import NewsItem from './NewsItem'
import Loading from 'react-loading'

class NewsItems extends React.Component {
  constructor(props) {
    super(props)
    this.updateNews = this.updateNews.bind(this)
    this.state = {
      newsItems: [],
      arrayLength: ''
    }
  }

  componentDidMount(){
    fetch('/articles?' + 'user_email=' + sessionStorage.getItem('email') + '&user_token=' +  sessionStorage.getItem('api_token'))
    .then(response => response.json())
    .then(this.updateNews)
    // .then(response => console.log(response))
  }

  updateNews(response){
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
      return <div className='hiddenSection'>
               <div className="leftBottom">
                 <div className="titleFont" id="titleFont">News Feed</div>
                   {/* <button className="btn avatarText text-center center-block" id="profileAvatarTextBtn">loading<br/> legislators</button> */}
                   <div className="loadingIcon">
                      <Loading type='bubbles' color='#223843' />
                   </div>
                 </div>
               </div>
    }
    return <div className='hiddenSection'>
      <div className="leftBottom">
        <div className="titleFont" id="titleFont">News Feed</div>
            <div className='profileBox'>
              {news}
            </div>
      </div>
    </div>
  }
}

export default NewsItems
