import React, { useState } from "react";
import { useMutation } from '@apollo/react-hooks';
import { ADD_OWNED_PET } from '../../utils/mutations';
import './index.css';

function AddPetForm() {
  const [formState, setFormState] = useState({ petName: '', petType: '', petAge: '', petDescription: '' });
  const [addOwnedPet, { error }] = useMutation(ADD_OWNED_PET);

  const handleFormSubmit = async event => {
    event.preventDefault();

    try {
      const mutationResponse = await addOwnedPet({
        variables: {
          petName: formState.petName,
          petType: formState.petType,
          petAge: formState.petAge,
          petGender: formState.petGender,
          petLocation: formState.petLocation,
          petDescription: formState.petDescription
        }
      })

      const result = mutationResponse.data;
      console.log(result);
    }  catch (e) {
      console.log(e);
    }
    
  };

    const handleChange = event => {
      const { name, value } = event.target;
      setFormState({
        ...formState,
        [name]: value
      });
    };

  return (
    <div className="AddPetSection">
      <div className="AddPetContainer">
        <div className="AddPetTitle">Fill out this form to create your pet's adoption post</div>
        <form onSubmit={handleFormSubmit}
        className="AddPetInformation">
          <div className="AddPetInformationInputContainer">
            <div className="AddPetFormLeft">
              <div className="AddPetName">
                <label HTMLfor="petName">Pet Name:</label>
                <input
                  className="AddPetNameInputField"
                  id="petName"
                  name="petName"
                  type="input"
                  onChange={handleChange}
                />
              </div>
              <div className="AddPetType">
                <label HTMLfor="petType">Type of Animal:</label>
                <input
                  className="AddPetTypeInputField"
                  id="petType"
                  name="petType"
                  type="input"
                  onChange={handleChange}
                />
              </div>
              <div className="AddPetAge">
                <label HTMLfor="petAge">Pet Age:</label>
                <input
                  className="AddPetAgeInputField"
                  id="petAge"
                  name="petName"
                  type="input"
                  onChange={handleChange}
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
                <label HTMLfor="petLocation">Location (Zipcode):</label>
                <input
                  className="AddPetLocationInputField"
                  id="petLocation"
                  name="petLocation"
                  type="input"
                  onChange={handleChange}
                />
              </div>
              <div className="AddPetDescription">
                <label HTMLfor="petDescription">Description:</label>
                <textarea
                  className="AddPetDescriptionInputField"
                  name="petDescription"
                  onChange={handleChange}
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