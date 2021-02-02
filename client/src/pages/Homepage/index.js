import React from 'react';
import Signup from '../Signup'
import Auth from '../../utils/auth';
import AddPetForm from '../AddPetForm';
import PetList from '../../components/PetList';


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
          <PetList />
          
        </div>


      );
    } else {
      return (
        <div>
          <div>
            <Signup />
          </div>

          <div>
            <PetList />
          </div>

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
