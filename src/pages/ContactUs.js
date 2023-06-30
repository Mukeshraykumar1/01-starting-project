import React, { useState } from "react";
import { Card, Form, Button } from "react-bootstrap";

async function contactDetails(data) {
  const response = await fetch(
    "https://ecommerse-cf0c8-default-rtdb.firebaseio.com/users.json",
    {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "content-type": "application/json",
      },
    }
  );
  const responseData = await response.json();
  console.log(responseData);
  console.log(data);
}

const ContactUs = () => {
  const [userName, setUserName] = useState("");
  const [phoneNum, setPhoneNum] = useState("");
  const [emailId, setEmailId] = useState("");

  const submitHandler = (event) => {
    event.preventDefault();

    contactDetails({ name: userName, phone: phoneNum, email: emailId });
    setUserName("");
    setPhoneNum("");
    setEmailId("");
  };
  return (
    <div className="container mt-5">
      <Card className="p-4">
        <h1>Contant Us</h1>
        <Form onSubmit={submitHandler}>
          <Form.Group controlId="formName">
            <Form.Label>User Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter name"
              value={userName}
              onChange={(event) => setUserName(event.target.value)}
              required
            />
          </Form.Group>

          <Form.Group controlId="formPhone">
            <Form.Label>Phone No</Form.Label>
            <Form.Control
              type="tel"
              placeholder="Enter phone number"
              value={phoneNum}
              onChange={(event) => setPhoneNum(event.target.value)}
              required
            />
          </Form.Group>

          <Form.Group controlId="formEmail">
            <Form.Label>Email Id</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={emailId}
              onChange={(event) => setEmailId(event.target.value)}
              required
            />
          </Form.Group>

          <div className="mt-3">
            <Button variant="primary" type="submit" className="mr-2">
              Submit
            </Button>
          </div>
        </Form>
      </Card>
    </div>
  );
};
export default ContactUs;
