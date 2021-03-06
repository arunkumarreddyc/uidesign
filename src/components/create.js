import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Input, Form, FormGroup, Label } from "reactstrap";
import axios from "axios";

export default function Create() {
  const [name, setName] = useState("");
  const [designation, setDesignation] = useState("");
  const [city, setCity] = useState("");
  const navigate = useNavigate();

  const sendDataToApi = (e) => {
    e.preventDefault();
    if (name !== "" && designation !== "" && city !== "") {
      axios.post(`https://6231fb9159070d9273408dd2.mockapi.io/crud1`, {
        name,
        designation,
        city,
      });
      navigate("/");
    } else {
      alert("One or more fields are missing");
    }
  };
  return (
    <div>
      <Form className="border-light p-4 rounded bg-warning">
        <FormGroup>
          <Label for="exampleName">Name</Label>
          <Input
            id="exampleName"
            onChange={(e) => setName(e.target.value)}
            name="name"
            placeholder="Name"
            type="text"
          />
        </FormGroup>
        <FormGroup>
          <Label for="exampleWork">Designation</Label>
          <Input
            id="exampleWork"
            name="work"
            onChange={(e) => setDesignation(e.target.value)}
            placeholder="Designation"
            type="text"
          />
        </FormGroup>
        <FormGroup>
          <Label for="exampleCity">City</Label>
          <Input
            id="exampleCity"
            onChange={(e) => setCity(e.target.value)}
            name="city"
            placeholder="City"
            type="text"
          />
        </FormGroup>

        <Button color="primary" onClick={sendDataToApi}>
          Submit
        </Button>
      </Form>
    </div>
  );
}
