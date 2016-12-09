import React from 'react'
import { Router, Route, Link, browserHistory } from 'react-router'
import { Modal, ModalBody, ModalDialog, ModalFooter, ModalHeader, ModalTitle, ButtonToolbar, Button } from 'react-bootstrap'


class Legislation extends React.Component {
  constructor(props) {
    super(props)
    this.showModal = this.showModal.bind(this)
    this.hideModal = this.hideModal.bind(this)
    this.state = {
      show: false
    }
  }

  showModal() {
    this.setState({show: true})
  }

  hideModal() {
    this.setState({show: false})
  }

  render() {
    // console.log(this.props.data.latestVersion)
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
<div className='row legislationInfo'>
      <div className='col-sm-12'>

      <ButtonToolbar>
        <Button className="legislationBtn" onClick={this.showModal}>
        <div className="headlineText text-left">{this.props.data.billName}:</div>
        <div className='billDesc'>{this.props.data.latestVersion.shortDescription}</div>
        </Button>

        <Modal
          {...this.props}
          show={this.state.show}
          onHide={this.hideModal}
          dialogClassName="custom-modal"
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-lg">
              <div className="accordionHeaderText text-left">{this.props.data.billName}: {this.props.data.latestVersion.shortDescription}</div>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="col-sm-12">
              <div className="accordionHeaderText">Authors</div>
            <img className="smlProfileImg img-circle" src="https://unsplash.it/400?random" />
            <div className="authorText">{allAuthors}</div>
            </div>
            <div className="col-sm-12">
              <div className="accordionHeaderText">Digest</div>
            </div>
            {this.props.data.latestVersion.digest}
          </Modal.Body>
          <Modal.Footer>
            <Button className="profileFollowBtn" onClick={this.hideModal}>Close</Button>
          </Modal.Footer>
        </Modal>
      </ButtonToolbar>
      </div>
    </div>
    </div>
  }
}

export default Legislation
