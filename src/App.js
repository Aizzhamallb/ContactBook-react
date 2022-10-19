import React, { useState } from "react";
import Header from "./components/Header/Header";
import AddContact from "./components/AddContact/AddContact";
import ContactCard from "./components/ContactCard/ContactCard";
import ContactList from "./components/ContactList/ContactList";
import EditContact from "./components/EditContact/EditContact";

const App = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [contacts, setContacts] = useState([]);

  function addContact(newObj) {
    let newContacts = [...contacts];
    newContacts.push(newObj);
    console.log(newContacts);
    setContacts(newContacts);
  }

  function deleteContact(id) {
    let newContacts = [...contacts];
    newContacts = newContacts.filter(item => item.id != id);
    setContacts(newContacts);
  }

  const [showEditModal, setShowEditModal] = useState(false);
  const handleEditClose = () => setShowEditModal(false);
  const handleEditShow = () => setShowEditModal(true);
  const [editContact, setEditContact] = useState({});

  function handleEdit(id) {
    let obj = contacts.find(item => item.id === id);
    setEditContact(obj);
    console.log(obj);
    setShowEditModal(true);
  }

  function handleSave(obj) {
    let newContacts = contacts.map(item => {
      if (item.id === obj.id) {
        return obj;
      }
      return item;
    });
    setContacts(newContacts);
    setShowEditModal(false);
  }

  return (
    <div>
      <Header handleShow={handleShow} />
      <AddContact
        show={show}
        handleClose={handleClose}
        addContact={addContact}
      />
      <ContactList
        contacts={contacts}
        deleteContact={deleteContact}
        handleEdit={handleEdit}
      />
      {showEditModal && (
        <EditContact
          editContact={editContact}
          showEditModal={showEditModal}
          handleEditClose={handleEditClose}
          handleSave={handleSave}
        />
      )}
    </div>
  );
};

export default App;
