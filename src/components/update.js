import React, { useState,useEffect } from "react";
import {Link,useNavigate} from 'react-router-dom'
import {
  Button,
  Input,
  Form,
  FormGroup,
  Label,
  TextField,
  FormText,
} from "reactstrap";
import axios from "axios";

export default function Update() {
  const navigate = useNavigate()
  const [name, setName] = useState(null);
  const [designation, setDesignation] = useState(null);
  const [city, setCity] = useState(null);
  const [id, setId] = useState(null);

  const sendDataToApi = (e) => {
    e.preventDefault();
    axios.put(`https://6231fb9159070d9273408dd2.mockapi.io/crud1/${id}`, {
      name,
      designation,
      city,
    });
    navigate('/')
  };
  useEffect(() => {
   setName(localStorage.getItem('name'));
   setDesignation(localStorage.getItem('designation'));
   setCity(localStorage.getItem('city'));
   setId(localStorage.getItem('id'));
    
  }, [])
  
  
  return (
    <div>
      <Form className="border-light p-4 rounded bg-warning">
        <FormGroup>
          <Label for="exampleName">Name</Label>
          <Input
            id="exampleName"
            value={name}
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
            value={designation}
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
            value={city}
            onChange={(e) => setCity(e.target.value)}
            name="city"
            placeholder="City"
            type="text"
          />
        </FormGroup>
       
        <Button color="primary" type="submit" onClick={sendDataToApi}>
          Update
        </Button>
        
      </Form>
    </div>
  );
}
