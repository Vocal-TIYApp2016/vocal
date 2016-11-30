import React from 'react'
import { Router, Route, Link, browserHistory } from 'react-router'
import { Accordian, Panel, Button } from 'react-bootstrap'

class SingleLegislation extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      open: false
    }
  }
  // hideBtn() {
  //   if (this.state.open = false){
  //
  //   }
  // }

  render() {
    return <div>
    <div>
      <Button className='billBtn' onClick={ ()=> this.setState({ open: !this.state.open })}>
        <div className="navItems text-left">{this.props.data.title} - {this.props.data.shortDesc}</div>
      </Button>
      <Panel collapsible expanded={this.state.open}>
        <div className="col-sm-6">
          <div className="accordionHeaderText">Authors</div>
        <img className="smlProfileImg img-circle" src="https://unsplash.it/400?random" />
        <div className="authorText">{this.props.data.authorName}</div>
        </div>
        <div className="col-sm-6">
          <div className="accordionHeaderText">Co-Authors</div>
        <div className="authorText">{this.props.data.coAuthors}</div>
        </div>
        <div className="col-sm-12 accordionHeaderText">
          Digest
        </div>
        {this.props.data.longDesc}

      </Panel>
    </div>
    </div>
  }
}

export default SingleLegislation
