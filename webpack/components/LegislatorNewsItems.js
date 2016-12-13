import React from 'react'
import { Router, Route, Link, browserHistory } from 'react-router'
import NewsItem from './NewsItem'

class LegislatorNewsItems extends React.Component {
  constructor(props) {
    super(props)
    this.updateNews = this.updateNews.bind(this)
    this.state = {
      legislatorNewsItems: []
    }
  }
  componentDidMount(){
    fetch('/articles')
    .then(response => response.json())
    .then(this.updateNews)
  }

  updateNews(response){
    this.setState({
      legislatorNewsItems: response
    })
  }

  render() {
    var news = this.state.legislatorNewsItems.map((data, i) => {
      return <NewsItem data={data} key={i} />
    })
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
