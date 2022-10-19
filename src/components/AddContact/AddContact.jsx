import React, { useState } from "react";
import { Button, Modal, FormControl } from "react-bootstrap";

const AddContact = ({ show, handleClose, addContact }) => {
  const [image, setImage] = useState("");
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  function createContact() {
    if (!image || !name || !number) {
      alert("Some inputs are empty");
      return;
    }

    let newObj = {
      image,
      name,
      number,
      id: Date.now(),
    };

    addContact(newObj);

    setImage("");
    setName("");
    setNumber("");

    handleClose();
  }

  return (
    <>
      {/* <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button> */}

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Contact</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="form">
            <FormControl
              size="lg"
              className="my-3"
              placeholder="Image"
              value={image}
              type="url"
              onChange={e => setImage(e.target.value)}
            />
            <FormControl
              size="lg"
              className="my-3"
              placeholder="Name"
              value={name}
              onChange={e => setName(e.target.value)}
            />
            <FormControl
              size="lg"
              className="my-3"
              placeholder="Number"
              value={number}
              onChange={e => setNumber(e.target.value)}
            />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="daek" onClick={createContact}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default AddContact;
