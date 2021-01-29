import React from 'react';
import './index.css';

function Login() {
  return (
    <div className="LoginSection">
      <div className="LoginContainer">
        <div className="LoginTitle">Login</div>
        <div className="LoginCredentials">
          <div className="LoginUsername">
            <label for="username">username</label>
            <input className="LoginUsernameInputField" name="username" type="input"></input>
          </div>
          <div className="LoginPassword">
            <label for="password">password</label>
            <input className="LoginPasswordInputField" name="password" type="password"></input>
          </div>
          <Link className="SignupLink" href="/Signup">Signup Instead</Link>
        </div>
      </div>
    </div>
  );
}

export default Login;