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
    })
    return <div>
        <Button className='billBtn' onClick={ ()=> this.setState({ open: !this.state.open })}>
            <div className="text-left billTitle">{this.props.data.latestVersion.billName} - {this.props.data.latestVersion.shortDescription}</div>
        </Button>
      <Panel collapsible expanded={this.state.open}>
        <div className="modal-body">
            <div className="row">
                <div className="col-sm-12">
                    <div className="accordionHeaderText">Authors</div> <br/>
                        <div className="authorText">{allAuthors}</div> <br/>
                </div>
            </div><br/>
            <div className="row">
                <div className="col-sm-12">
                    <div className="accordionHeaderText">Digest</div> <br/>
                    <div className='billDigest'>{this.props.data.latestVersion.digest}</div>
                </div>
            </div>
        </div>
      </Panel>
    </div>
  }
}

export default SingleLegislation
