import React from 'react';
import Signup from '../Signup'
import Auth from '../../utils/auth';


function Homepage() {

  //conditionally render signup page
  function showSignup() {
    if (Auth.loggedIn()) {
      return (
        <button>
          <a href="/" onClick={() => Auth.logout()}>
            Logout
            </a>
        </button>
      );
    } else {
      return (
        <div>
          <Signup />
        </div>
      );
    }
  }

  return (
    <div>
      {showSignup()}
    </div>
  );

}

export default Homepage;
