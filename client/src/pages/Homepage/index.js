import React from 'react';
import Signup from '../Signup'
import Auth from '../../utils/auth';


function Homepage() {

  //conditionally render signup page
  function showSignup() {
    if (Auth.loggedIn()) {
      return (
        <div>
          
        </div>
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
