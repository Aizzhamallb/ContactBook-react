import React, { useState } from "react";
import { Button, Modal, FormControl } from "react-bootstrap";

const EditContact = ({
  editContact,
  showEditModal,
  handleEditClose,
  handleSave,
}) => {
  const [contact, setContact] = useState(editContact);

  const editImage = e => {
    setContact({
      ...contact,
      image: e.target.value,
    });
  };
  const editName = e => {
    setContact({
      ...contact,
      name: e.target.value,
    });
  };
  const editNumber = e => {
    setContact({
      ...contact,
      number: e.target.value,
    });
  };
  function saveChanges() {
    handleSave(contact);
  }

  return (
    <>
      {/* <Button variant="primary" onClick={handleShow}>
      Launch demo modal
    </Button> */}

      <Modal show={showEditModal} onHide={handleEditClose}>
        <Modal.Header closeButton>
          <Modal.Title>Change Contact</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="form">
            <FormControl
              size="lg"
              className="my-3"
              placeholder="Name"
              value={contact.name}
              onChange={editName}
            />
            <FormControl
              size="lg"
              className="my-3"
              placeholder="Number"
              value={contact.number}
              onChange={editNumber}
            />
            <FormControl
              size="lg"
              className="my-3"
              placeholder="Image"
              value={contact.image}
              type="url"
              onChange={editImage}
            />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleEditClose}>
            Close
          </Button>
          <Button variant="daek" onClick={saveChanges}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default EditContact;
