import React from 'react'
import { Router, Route, Link, browserHistory } from 'react-router'
import NewsItem from './NewsItem'
import Loading from 'react-loading'

class LegislatorNewsItems extends React.Component {
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
    return <div>
            <div className='hiddenSection'>
              <div className="col-sm-6 columnContainer">
                <div className="text-center titleFont">News Feed</div>
                <div className='profileBox'>
                  {news}
                  </div>
              </div>
            </div>
           </div>
  }
}

export default LegislatorNewsItems
