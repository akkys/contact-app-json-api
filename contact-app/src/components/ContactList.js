import React from "react";
import ContactCard from "./ContactCard";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

const ContactList = (props) => {
  const deleteContact = (id) => {
    props.getContactId(id);
  };
  const renderContactList = props.contacts.map((contact, i) => {
    return (
      <ContactCard key={i} contact={contact} deleteContact={deleteContact} />
    );
  });

  return (
    <div className="">
      <h2>
        Contact List
        <Link
          to="/addContact"
          style={{ textDecoration: "none", float: "right" }}
        >
          <Button variant="contained" size="small" color="primary">
            Add Contact
          </Button>
        </Link>
      </h2>

      {renderContactList}
    </div>
  );
};

export default ContactList;
