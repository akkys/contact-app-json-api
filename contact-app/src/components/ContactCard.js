import { List } from "@material-ui/core";
import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import DeleteForeverSharpIcon from "@material-ui/icons/DeleteForeverSharp";
import PersonSharpIcon from "@material-ui/icons/PersonSharp";
import EditSharpIcon from "@material-ui/icons/EditSharp";
import { Link, useLocation } from "react-router-dom";

const ContactCard = ({ contact, deleteContact }) => {
  return (
    <div className="">
      <List>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <PersonSharpIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            primary={contact.name}
            secondary={
              <>
                {contact.phone}
                <br />
                {contact.email}
              </>
            }
          />

          <span className="">
            <Link to={{ pathname: `/update`, state: { contact } }}>
              <EditSharpIcon
                fontSize="medium"
                style={{ color: "#1976d2", marginRight: "15px" }}
              />
            </Link>

            <DeleteForeverSharpIcon
              fontSize="medium"
              style={{ color: "red" }}
              onClick={() => deleteContact(contact.id)}
            />
          </span>
        </ListItem>
      </List>
    </div>
  );
};

export default ContactCard;
