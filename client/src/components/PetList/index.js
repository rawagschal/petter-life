import React, { useState } from 'react';
import { useQuery, useMutation } from '@apollo/react-hooks';
import { QUERY_PETS } from "../../utils/queries";
import './index.css';
import { ADD_LIKED_PET } from '../../utils/mutations';

const PetList = ({ pets }) => {

    const { loading, data } = useQuery(QUERY_PETS);
    console.log('data', data);

    const [petState, setPetState] = useState({ liked: false });
    // const [addLikedPet] = useMutation(ADD_LIKED_PET);

    const buttonTextHandler = async event => {
        event.preventDefault();
        console.log("you clicked this button");
        console.log(petState);
        const petState = () => {
            if (petState.liked = false) {
                return true
            } else {
                return false;
            }
        }

        const textFlip = (petState) => {
            if (petState) {
                return (
                    <button>
                        Unlike this Pet
                    </button>
                );
            } else {
                return (
                    <button>Like this Pet</button>
                )
            }
        }

        textFlip();

        // const result = await addLikedPet({
        // });

        // console.log(result);
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
                        <button className="LikePetBtn" onClick={buttonTextHandler}>Like this Pet</button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default PetList;