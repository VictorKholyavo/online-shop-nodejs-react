import React from 'react';
import "./login.css";

function LoginComponent(props) {
  return (
    <div className="card">
      <h1>Login</h1>
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
          placeholder="Password goes here..."
          name="password"
          type="password"
          onChange={props.handleChange}
        />
        <input
          className="form-submit"
          value="LOG IN"
          name="loginButton"
          type="submit"
          onClick={props.handleFormSubmit}
        />
      </form>
    </div>
  );
}

export default LoginComponent;
