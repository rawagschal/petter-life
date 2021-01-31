import React from 'react';
import Signup from '../Signup'
import Auth from '../../utils/auth';
import AddPetForm from '../AddPetForm';


function Homepage() {

  //conditionally render signup page
  function showSignup() {
    if (Auth.loggedIn()) {
      return (
        <div>
          <button>
            <a href="/" onClick={() => Auth.logout()}>
              Logout
            </a>
          </button>
          <AddPetForm />
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
