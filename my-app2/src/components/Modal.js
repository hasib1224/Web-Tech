import React from "react";
import { Button, Modal } from "react-bootstrap";

function ExampleModal(props) {
  return (
    <Modal show={props.show} onHide={props.handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{props.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{props.children}</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={props.handleClose}>
          Close
        </Button>
        {/* <Button variant="primary" onClick={props.handleSave}>
          Save Changes
        </Button> */}
      </Modal.Footer>
    </Modal>
  );
}

export default ExampleModal;
