import React, { useState } from 'react';
import { useQuery, useMutation } from '@apollo/react-hooks';
import { QUERY_PETS } from "../../utils/queries";
import './index.css';
import { ADD_LIKED_PET, DELETE_LIKED_PET } from '../../utils/mutations';

const PetList = ({ pets }) => {

    const { loading, data } = useQuery(QUERY_PETS);
    console.log('data', data);

    // const [addLikedPet] = useMutation(ADD_LIKED_PET);

    const [petState, setPetState] = useState({ liked: false });

    const buttonTextHandler = async event => {
        event.preventDefault();

        setPetState(!petState)
        console.log(petState); 

        if (petState.liked) {
            //push pet into user's likedPets array
            //use ADD_LIKED_PETS mutation
        } else {
            //PULL pet from user's likedPets array
        }
    }


    if (!data) {
        return <p>No pets available for adoption at this current time.
        Please add one or refer any acquantances looking to rehome their pet.
        </p>
    }

    return (
        <div className="AvailablePetsContainer">
            <div className="AvailablePetsTitle">Pets available for adoption:</div>
            <div className="PetListingsContainer">
                {!loading && data.pets.map(pet => (
                    <div className="PetListing" key={pet._id}>
                        <ul className="PetInfo">
                            <li>{pet.name} - ({pet.type})</li>
                            <li>Age: {pet.age} - {pet.gender}</li>
                            <li>Location: {pet.location}</li>
                            <li>Fixed: {pet.fixed}</li>
                            <li>{pet.description}</li>
                        </ul>

                        {!petState ? (
                            <button className="LikePetBtn" onClick={buttonTextHandler}>Unlike this Pet</button>
                        ) : (
                            <button className="LikePetBtn" onClick={buttonTextHandler}>Like this Pet</button>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default PetList;