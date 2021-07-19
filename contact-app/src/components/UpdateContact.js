import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import { TextField } from "@material-ui/core";
import { Link, useHistory, useLocation } from "react-router-dom";

const UpdateContact = (props) => {
  const location = useLocation();
  const { id } = location.state.contact;
  const [name, setName] = useState(location.state.contact.name);
  const [email, setEmail] = useState(location.state.contact.email);
  const [phone, setPhone] = useState(location.state.contact.phone);

  const history = useHistory();

  const updateContact = (e) => {
    e.preventDefault();
    if (name === "" || email === "" || phone === "") {
      alert("All fileds are mandatory!");
      return;
    }
    props.handleUpdateContact({ id, name, email, phone });

    history.push("/");
  };

  return (
    <div className="">
      <h2>
        Update Contact{" "}
        <Link to="/" style={{ textDecoration: "none", float: "right" }}>
          <Button variant="contained" size="small" color="secondary">
            Back
          </Button>
        </Link>
      </h2>
      <form className="" onSubmit={updateContact}>
        <div className="">
          <TextField
            label="Name"
            id="outlined-size-small"
            variant="outlined"
            size="small"
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            fullWidth
          />
        </div>
        <br />
        <div className="">
          <TextField
            label="Mobile Number"
            id="outlined-size-small"
            variant="outlined"
            size="small"
            type="text"
            name="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            fullWidth
          />
        </div>
        <br />
        <div className="">
          <TextField
            label="Email"
            id="outlined-size-small"
            variant="outlined"
            size="small"
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            fullWidth
          />
        </div>
        <br />

        <Button type="submit" variant="outlined" size="small" color="primary">
          Update
        </Button>
      </form>
    </div>
  );
};

export default UpdateContact;
