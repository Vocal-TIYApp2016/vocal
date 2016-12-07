import React from 'react'
import { Router, Route, Link, browserHistory } from 'react-router'

class NewsItem extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return <div>
    <div className="row newsInfo">
      <div className="col-sm-12">
        <span className="text-left headlineText">{this.props.data.headline}</span>
        <span className="text-right dateAndSourceText" id="floatRight">{this.props.data.date}</span>
        <div className="dateAndSourceText">{this.props.data.source}</div>
     </div>
    </div>
    </div>
  }
}

export default NewsItem
