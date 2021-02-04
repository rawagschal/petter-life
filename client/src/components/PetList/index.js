import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useQuery, useMutation } from '@apollo/react-hooks';
import { ADD_LIKED_PET } from '../../utils/mutations';
import { QUERY_PETS } from "../../utils/queries";
import { savePetIds, getSavedPetIds } from '../../utils/localStorage';
import './index.css';


const PetList = ({ pets }) => {

    const { loading, data } = useQuery(QUERY_PETS);
    console.log('pet data', data);

    const [addLikedPet] = useMutation(ADD_LIKED_PET);

    // const [petState, setPetState] = useState({ liked: false });

    // const [pets, setPets] = useState([]);

    const [savedPetIds, setSavedPetIds] = useState(getSavedPetIds());

    // const buttonTextHandler = async event => {
    //     event.preventDefault();

    //     setPetState(!petState)
    //     console.log(petState);
    // }


    if (!data) {
        return <p>No pets available for adoption at this current time.
        Please add one or refer any acquantances looking to rehome their pet.
        </p>
    }

    // create function to handle saving a book to our database
    const handleLikedPet = async (petId) => {

        // find the book in `searchedBooks` state by the matching id
        const petToSave = data.pets.find((pet) => pet.petId === petId);
        console.log('pettosave', petToSave);
        try {
            const { data } = await addLikedPet({
                variables: {
                    name: petToSave.name,
                    type: petToSave.type,
                    age: petToSave.age,
                    gender: petToSave.gender,
                    location: petToSave.location,
                    fixed: petToSave.fixed
                },
            });
            console.log('data44', data);
            console.log('savedPetIds', savedPetIds);
            setSavedPetIds([...savedPetIds, petToSave.petId]);
        }
        catch (error) {
            console.error(error);
        }
    };


    return (
        <div className="PetListingsContainer">
            <div className="AvailablePetsContainer">
                <div className="AvailablePetsTitle">Pets available for adoption:</div>
                <div className="PetListings">
                    {!loading && data.pets.map(pet => (
                        <div className="SinglePetListing" key={pet._id}>
                            <ul className="PetInfo">
                                <li>{pet.name} - ({pet.type})</li>
                                <li>Age: {pet.age} - {pet.gender}</li>
                                <li>Location: {pet.location}</li>
                                <li>Fixed: {pet.fixed}</li>
                                <li>{pet.description}</li>
                            </ul>

                            <button
                                disabled={savedPetIds?.some((savedPetId) => savedPetId === pet.petId)}
                                className='LikePetBtn'
                                onClick={() => handleLikedPet(pet.petId)}>
                                {savedPetIds?.some((savedPetId) => savedPetId === pet.petId)
                                    ? 'This pet has already been saved!'
                                    : 'Save this pet!'}
                            </button>

                            {/* 
                            {!petState ? (
                                <button className="LikePetBtn" onClick={buttonTextHandler}>Save Pet</button>
                            ) : (
                                    <button className="LikePetBtn" onClick={buttonTextHandler}>Unsave Pet</button>
                                )} */}
                        </div>
                    ))}
                </div>
            </div>
            <Link to="/addPetForm" className="CreateListingBtn">Create Listing</Link>
        </div>
    );
}

export default PetList;