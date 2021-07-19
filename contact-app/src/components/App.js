import { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import api from "../api/contacts";
import ContactList from "./ContactList";
import CreateContact from "./CreateContact";
import UpdateContact from "./UpdateContact";
import Header from "./Header";
import { uuid } from "uuidv4";
import { Container } from "@material-ui/core";

function App() {
  const [contacts, setContacts] = useState([]);

  const retrieveContacts = async () => {
    const response = await api.get("/contacts");
    return response.data;
  };

  const handleAddContact = async (contact) => {
    console.log("App", contact);
    const request = {
      id: uuid(),
      ...contact,
    };
    const response = await api.post("/contacts", request);
    setContacts([...contacts, response.data]);
  };

  const handleUpdateContact = async (contact) => {
    const response = await api.put(`/contacts/${contact.id}`, contact);
    const { id } = response.data;
    setContacts(
      contacts.map((contact) => {
        return contact.id === id ? { ...response.data } : contact;
      })
    );
  };

  useEffect(() => {
    const getAllContacts = async () => {
      const allContacts = await retrieveContacts();
      if (allContacts) setContacts(allContacts);
    };
    getAllContacts();
  }, []);

  const removeContactHandler = async (id) => {
    await api.delete(`/contacts/${id}`);
    const newContacts = contacts.filter((contact) => {
      return contact.id !== id;
    });
    setContacts(newContacts);
  };

  return (
    <Container maxWidth="sm" className="app">
      <Header />
      <Router>
        <Switch>
          <Route exact path="/">
            <ContactList
              contacts={contacts}
              getContactId={removeContactHandler}
            />
          </Route>
          <Route exact path="/addContact">
            <CreateContact handleAddContact={handleAddContact} />
          </Route>
          <Route exact path="/update">
            <UpdateContact handleUpdateContact={handleUpdateContact} />
          </Route>
        </Switch>
      </Router>
    </Container>
  );
}

export default App;
