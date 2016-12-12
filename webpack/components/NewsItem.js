import React from 'react'
import { Router, Route, Link, browserHistory } from 'react-router'
import moment from 'moment'


class NewsItem extends React.Component {
  constructor(props) {
    super(props)
    this.goToSite = this.goToSite.bind(this)
    this.state = {
      link: this.props.data.link
    }
  }

  goToSite(){
    window.open(this.state.link)
  }

  render() {
    return <div>
    <div className="row newsInfo">
      <div className="col-sm-12" onClick={this.goToSite}>
      <span className="text-right dateAndSourceText">{moment(this.props.data.date).format('MMMM Do YYYY')}</span><br/>
        <span className="text-left headlineText">{this.props.data.title}</span>
        <div className="dateAndSourceText">{this.props.data.source}</div>
     </div>
    </div>
    </div>
  }
}

export default NewsItem
