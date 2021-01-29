import React from 'react';
import { Link } from "react-router-dom";
import { useMutation } from '@apollo/react-hooks';
import Auth from "../utils/auth";
import { ADD_USER } from "../utils/mutations";
import './index.css';

function Signup() {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [addUser] = useMutation(ADD_USER);

  
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
          <Link className="LoginLink" to="/login">
          Log In Instead
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Signup;