import React from 'react';
import "./login.css";
import { Button, Form } from "react-bootstrap";

function LoginComponent(props) {
  return (
    <div className="Login">
      <Form onSubmit={props.handleFormSubmit}>
        <Form.Group controlId="email" bsSize="large">
          <Form.Label>Email</Form.Label>
          <Form.Control
            autoFocus
            type="email"
            name="email"
            onChange={props.handleChange}
          />
        </Form.Group>
        <Form.Group controlId="password" bsSize="large">
          <Form.Label>Password</Form.Label>
          <Form.Control
            onChange={props.handleChange}
            name="password"
            type="password"
          />
        </Form.Group>
        <Button
          block
          bsSize="large"
          type="submit"
          name="loginButton"
          onClick={props.handleFormSubmit}
        >
          Login
        </Button>
      </Form>
    </div>
  );
}

export default LoginComponent;
