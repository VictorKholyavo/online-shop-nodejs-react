import React from 'react';
import "./login.css";
import {Button, Form} from "react-bootstrap";

function RegistrationComponent(props) {
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
        <Form.Group controlId="username" bsSize="large">
          <Form.Label>Username</Form.Label>
          <Form.Control
            autoFocus
            type="text"
            name="username"
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
          name="registerButton"
          onClick={props.handleFormSubmit}
        >
          Register
        </Button>
      </Form>
    </div>

    // <div className="card">
    //   <h1>Registration</h1>
    //   <form>
    //     <input
    //       className="form-item"
    //       placeholder="Email goes here..."
    //       name="email"
    //       type="text"
    //       onChange={props.handleChange}
    //     />
    //     <input
    //       className="form-item"
    //       placeholder="Username goes here..."
    //       name="username"
    //       type="text"
    //       onChange={props.handleChange}
    //     />
    //     <input
    //       className="form-item"
    //       placeholder="Password goes here..."
    //       name="password"
    //       type="password"
    //       onChange={props.handleChange}
    //     />
    //     <input
    //       className="form-submit"
    //       value="REGISTER"
    //       name="registerButton"
    //       type="submit"
    //       onClick={props.handleFormSubmit}
    //     />
    //   </form>
    // </div>
  );
}

export default RegistrationComponent;
