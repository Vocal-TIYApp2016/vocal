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
    return <div>
<div className='row legislationInfo'>
      <div className='col-sm-12'>

      <ButtonToolbar>
        <Button className="legislationBtn" onClick={this.showModal}>
        <div className="headlineText text-left">{this.props.data.billName}:</div>
        <div className='billDesc'>{this.props.data.billDesc}</div>
        </Button>

        <Modal
          {...this.props}
          show={this.state.show}
          onHide={this.hideModal}
          dialogClassName="custom-modal"
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-lg">
              <div className="headlineText text-left">{this.props.data.billName}:</div>
              <div className='billDesc'>{this.props.data.billDesc}</div>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="col-sm-12">
              <div className="accordionHeaderText">Authors</div>
            <img className="smlProfileImg img-circle" src="https://unsplash.it/400?random" />
            <div className="authorText">{this.props.data.authorName}</div>
            </div>
            <div className="col-sm-12">
              <div className="accordionHeaderText">Co-Authors</div>
            <div className="authorText">{this.props.data.coAuthors}</div>
            </div>
            <div className="col-sm-12 accordionHeaderText">
              Digest
            </div>
            {this.props.data.longDesc}
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.hideModal}>Close</Button>
          </Modal.Footer>
        </Modal>
      </ButtonToolbar>








      </div>
    </div>
    </div>
  }
}

export default Legislation
