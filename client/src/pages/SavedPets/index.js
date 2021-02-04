import React from 'react';
import './index.css';
import { useStoreContext } from "../../utils/GlobalState"

function SavedPets() {
    const { globalStore, dispatch } = useStoreContext();
    return (
        <div className="AddPetSection">
            <div className="SavedPetContainer">
                <div className="SavedPetTitle">Your Saved Pets</div>
                { globalStore.user === null? <p>Loading</p>: 
                globalStore.user.likedPets.map(function(pet) {
                    return(
                        <h3>{pet.name}</h3>
                        // <}<h2>{pet.type}</h2>
                        // <h3>{pet.age}</h3>,
                        // <h3>{pet.gender}</h3>,
                        // <h3>{pet.fixed}</h3>,
                        // <h3>{pet.location}</h3>,
                        // <h3>{pet.description/h3>
  

                    )
                }) }
            </div>
        </div>
    )
}

export default SavedPets;