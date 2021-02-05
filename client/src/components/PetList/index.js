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
        return <p></p>
    }

    // create function to handle saving a book to our database
    const handleLikedPet = async (petId) => {
        console.log(petId);
        // find the book in `searchedBooks` state by the matching id
        // const petToSave = data.pets.find((pet) => pet._id === petId);
        // console.log('pettosave', petToSave);
        try {
            const { data } = await addLikedPet({
                variables: {
                  _id: petId
                },
            });
            console.log('data44', data);
            // console.log('savedPetIds', savedPetIds);
            // setSavedPetIds([...savedPetIds, petToSave._id]);
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
                        <div className="SinglePetListings" key={pet._id}>
                            <ul className="PetInfo">
                                <li>{pet.name} - ({pet.type})</li>
                                <li>Age: {pet.age} - {pet.gender}</li>
                                <li>Location: {pet.location}</li>
                                <li>Fixed: {pet.fixed}</li>
                                <li>{pet.description}</li>
                            </ul>
                            <button
                                // disabled={false}
                                className='LikePetBtn'
                                onClick={() => handleLikedPet(pet._id)}>
                                    Save Pet
                                {/* {savedPetIds?.some((savedPetId) => savedPetId === pet._id)
                                    ? 'This pet has already been saved!'
                                    : 'Save this pet!'} */}
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