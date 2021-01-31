import React from "react";
import './index.css';

function AddPetForm() {

  return (
    <div className="AddPetSection">
      <div className="AddPetContainer">
        <div className="AddPetTitle">Fill out this form to create your pet's adoption post</div>
        <form className="AddPetInformation">
          <div className="AddPetInformationInputContainer">
            <div className="AddPetFormLeft">
              <div className="AddPetName">
                <label HTMLfor="petName">Name:</label>
                <input 
                  className="AddPetNameInputField" 
                  id="petName" 
                  name="petName" 
                  type="input" 
                />
              </div>
              <div className="AddPetType">
                <label HTMLfor="petType">Type:</label>
                <select className="AddPetPetTypeInputField" id="petType" name="petType">
                  <option value="Dog">Dog</option>
                  <option value="Cat">Cat</option>
                  <option value="Bird">Bird</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className="AddPetAge">
                <label HTMLfor="petAge">Age:</label>
                <input 
                  className="AddPetAgeInputField" 
                  id="petAge" 
                  name="petName" 
                  type="input" 
                />
              </div>
              <div className="AddPetGender">
                <label HTMLfor="petGender">Gender:</label>
                <select className="AddPetPetGenderInputField" id="petGender" name="petGender">
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </div>
            </div>

            <div className="AddPetFormRight">
              <div className="AddFixedStatus">
                <label HTMLfor="petGender">Fixed?</label>
                <select className="AddPetPetGenderInputField" id="petGender" name="petGender">
                  <option value="Male">Yes</option>
                  <option value="Female">No</option>
                </select>
              </div>
              <div className="AddPetLocation">
                <label HTMLfor="petLocation">Location Zipcode:</label>
                <input 
                  className="AddPetLocationInputField" 
                  id="petLocation" 
                  name="petLocation" 
                  type="input" 
                />
              </div>
              <div className="AddPetDescription">
                <label HTMLfor="petDescription">Description:</label>
                <textarea 
                  className="AddPetDescriptionInputField" 
                  name="petDescription" 
                />
              </div>
            </div>  
          </div>        
          <button className="AddPetBtn" type="submit">Add Pet</button>
        </form>
      </div>
    </div>
  );
}

export default AddPetForm;