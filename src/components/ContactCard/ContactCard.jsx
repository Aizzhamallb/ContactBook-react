import React from "react";
import { Card, Button } from "react-bootstrap";

const ContactCard = ({ item, deleteContact, handleEdit }) => {
  console.log(item);
  return (
    <Card style={{ width: "18rem", marginBottom: "10px" }}>
      <Card.Img variant="top" src={item.image} />
      <Card.Body>
        <Card.Text>
          {item.name} <br />
          Number:{item.number}
        </Card.Text>
        <Button variant="danger" onClick={() => deleteContact(item.id)}>
          Delete
        </Button>
        <Button
          variant="secondary"
          className="mx-1"
          onClick={() => handleEdit(item.id)}>
          Edit
        </Button>
      </Card.Body>
    </Card>
  );
};

export default ContactCard;
