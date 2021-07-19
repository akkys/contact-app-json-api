import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import { TextField } from "@material-ui/core";
import { Link, useHistory } from "react-router-dom";

const CreateContact = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const history = useHistory();

  const addContact = (e) => {
    e.preventDefault();
    if (name === "" || email === "" || phone === "") {
      alert("All fileds are mandatory!");
      return;
    }
    props.handleAddContact({ name, email, phone });
    setName("");
    setEmail("");
    setPhone("");
    history.push("/");
    // console.log({ name, email });
  };

  return (
    <div className="">
      <h2>
        Create Contact{" "}
        <Link to="/" style={{ textDecoration: "none", float: "right" }}>
          <Button variant="contained" size="small" color="secondary">
            Back
          </Button>
        </Link>
      </h2>
      <form className="" onSubmit={addContact}>
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

        <Button type="submit" variant="contained" size="small" color="primary">
          Add
        </Button>
      </form>
    </div>
  );
};

export default CreateContact;
