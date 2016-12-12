import React from 'react'
import { Router, Route, Link, browserHistory } from 'react-router'
import NewsItem from './NewsItem'

class MobileLegNewsItems extends React.Component {
  constructor(props) {
    super(props)
    this.updateNews = this.updateNews.bind(this)
    this.state = {
      LegislatorNewsItems: []
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
      legislatorNewsItems: response
    })
    }

  render() {
    var news = this.state.legislatorNewsItems.map((data, i) => {
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
