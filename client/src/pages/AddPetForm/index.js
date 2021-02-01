import React, { useState } from "react";
import { useMutation } from '@apollo/react-hooks';
import { ADD_OWNED_PET } from '../../utils/mutations';
import './index.css';

function AddPetForm(props) {
  const [formState, setFormState] = useState({ petName: '', petType: '', petAge: '', petDescription: '', petLocation: '', petFixed: '', petGender: ''});
  const [addOwnedPet] = useMutation(ADD_OWNED_PET);

  const handleFormSubmit = async event => {
    event.preventDefault();
    const mutationResponse = await addOwnedPet({
      variables: {
        name: formState.petName,
        type: formState.petType,
        age: formState.petAge,
        gender: formState.petGender,
        location: formState.petLocation,
        description: formState.petDescription,
        fixed: formState.petFixed
      }
    });

  const result = mutationResponse;
  console.log(result);
}
    

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
              <label htmlFor="petName">Pet Name:</label>
              <input
                className="AddPetNameInputField"
                id="petName"
                name="petName"
                type="input"
                onChange={handleChange}
              />
            </div>
            <div className="AddPetType">
              <label htmlFor="petType">Type of Animal:</label>
              <input
                className="AddPetTypeInputField"
                id="petType"
                name="petType"
                type="input"
                onChange={handleChange}
              />
            </div>
            <div className="AddPetAge">
              <label htmlFor="petAge">Pet Age:</label>
              <input
                className="AddPetAgeInputField"
                id="petAge"
                name="petName"
                type="input"
                onChange={handleChange}
              />
            </div>
            <div className="AddPetGender">
                <label htmlFor="petGender">Gender:</label>
                <select className="AddPetGenderInputField" id="petGender" name="petGender" onChange={handleChange}>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </div>
          </div>

          <div className="AddPetFormRight">
            <div className="AddFixedStatus">
                <label htmlFor="petFixed">Fixed?</label>
                <select className="AddPetFixedInputField" id="petFixed" name="petFixed" onChange={handleChange}>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
              </div>
            <div className="AddPetLocation">
              <label htmlFor="petLocation">Location (Zipcode):</label>
              <input
                className="AddPetLocationInputField"
                id="petLocation"
                name="petLocation"
                type="input"
                onChange={handleChange}
              />
            </div>
            <div className="AddPetDescription">
              <label htmlFor="petDescription">Description:</label>
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