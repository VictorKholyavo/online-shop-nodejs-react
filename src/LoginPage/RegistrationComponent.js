import React from 'react';
import "./login.css";

function RegistrationComponent(props) {
  return (
    <div className="card">
      <h1>Registration</h1>
      <form>
        <input
          className="form-item"
          placeholder="Email goes here..."
          name="email"
          type="text"
          onChange={props.handleChange}
        />
        <input
          className="form-item"
          placeholder="Username goes here..."
          name="username"
          type="text"
          onChange={props.handleChange}
        />
        <input
          className="form-item"
          placeholder="Password goes here..."
          name="password"
          type="password"
          onChange={props.handleChange}
        />
        <input
          className="form-submit"
          value="REGISTER"
          name="registerButton"
          type="submit"
          onClick={props.handleFormSubmit}
        />
      </form>
    </div>
  );
}

export default RegistrationComponent;
