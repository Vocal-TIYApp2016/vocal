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

  render() {
    var allAuthors = []
    var authors = this.props.data.latestVersion.authors.forEach(function(data) {
      return allAuthors.push(data.firstName + ' ' + data.lastName + ' ')
      // if(allAuthors.length > 1) {
      //   return allAuthors.push(data.firstName + ' ' + data.lastName + ', ')
      // }
      // else {
      //   return allAuthors.push(data.firstName + ' ' + data.lastName)
      // }
    })
    return <div>
    <div>
      <Button className='billBtn' onClick={ ()=> this.setState({ open: !this.state.open })}>
        <div className="navItems text-left">{this.props.data.latestVersion.billName} - {this.props.data.latestVersion.shortDescription}</div>
      </Button>
      <Panel collapsible expanded={this.state.open}>
      <div bsClass="modal-body">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="accordionHeaderText">Authors</div>
            <img className="smlProfileImg img-circle" src="https://unsplash.it/400?random" />
            <div className="authorText">{allAuthors}</div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12">
              <div className="accordionHeaderText">Digest</div>
                {this.props.data.latestVersion.digest}
            </div>
          </div>
        </div>
      </div>
      </Panel>
    </div>
    </div>
  }
}

export default SingleLegislation
