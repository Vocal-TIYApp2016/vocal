import React from 'react'
import { Router, Route, Link, browserHistory } from 'react-router'

class NewsItem extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return <div>
    <div className="row newsInfo">
      <div className="col-sm-9">
        <div className="headlineText">{this.props.data.headline}</div>
        <div className="dateAndSourceText">{this.props.data.source}</div>
      </div>
      <div className="col-sm-3 text-right dateAndSourceText">
        {this.props.data.date}
      </div>
     </div>
    </div>
  }
}

export default NewsItem
