import React from 'react'
import { Router, Route, Link, browserHistory } from 'react-router'
import { Modal, ModalBody, ModalDialog, ModalFooter, ModalHeader, ModalTitle, ButtonToolbar, Button } from 'react-bootstrap'

class LegislatorBill extends React.Component {
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
    var allAuthors = []
    var authors = this.props.data.latestVersion.authors.forEach(function(data) {
      return allAuthors.push(data.firstName + ' ' + data.lastName + ' ')
    })
    return <div>
            <div className='row legislationInfo'>
              <div className='col-sm-12'>
                <ButtonToolbar>
                  <Button className="legislationBtn" onClick={this.showModal}>
                  <div className="headlineText text-left">{this.props.data.latestVersion.billName}:</div>
                  <div className='billDesc'>{this.props.data.latestVersion.shortDescription}</div>
                  </Button>
                  <Modal {...this.props} show={this.state.show} onHide={this.hideModal} dialogClassName="custom-modal">
                    <Modal.Header closeButton>
                      <Modal.Title id="contained-modal-title-lg">
                        <div className="headlineText text-left">{this.props.data.latestVersion.billName}: {this.props.data.latestVersion.shortDescription}</div>
                      </Modal.Title>
                    </Modal.Header><br/>
                    <Modal.Body>
                      <div className="col-sm-12">
                        <div className="accordionHeaderText">Authors</div>
                      <div className="authorText" id="modalText">{allAuthors}</div>
                      </div>
                      <div className="col-sm-12">
                        <div className="accordionHeaderText">Digest</div>
                          <div className='billDigest' id="modalText">{this.props.data.latestVersion.digest}</div>
                      </div>
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

export default LegislatorBill
