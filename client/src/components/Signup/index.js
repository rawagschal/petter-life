import React from 'react';
import './index.css';

function Signup() {
  return (
    <div className="SignupSection">
      <div className="SignupContainer">
        <div className="SignupTitle">Signup</div>
        <div className="SignupCredentials">
          <div className="SignupUsername">
            <label for="username">username</label>
            <input className="SignupUsernameInputField" name="username" type="input"></input>
          </div>
          <div className="SignupEmail">
            <label for="email">email</label>
            <input className="SignupEmailInputField" name="email" type="email"></input>
          </div>
          <div className="SignupPassword">
            <label for="password">password</label>
            <input className="SignupPasswordInputField" name="password" type="password"></input>
          </div>
          <div className="LoginLink" href="/signup">Login</div>
        </div>
      </div>
    </div>
  );
}

export default Signup;