import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { QUERY_PETS } from "../../utils/queries";


const PetList = (pets) => {

    const [queryPets] = useQuery(QUERY_PETS);

    const generateList = async event => {
        event.preventDefault();
        const pets = await queryPets({

        });
        console.log(generateList);
    }



    if (!pets.length) {
        return <p>No pets available for adoption at this current time.
        Please add one or refer any acquantances looking to rehome their pet.
        </p>
    }

    return (
        <div>
            <h4>Pets available for adoption: </h4>
            { pets && pets.map(pet => (
                <ul key={pet._id}>
                    <li>{pet.name}</li>
                    <li>{pet.age}</li>
                    <li>{pet.description}</li>
                </ul>
            ))}

        </div>
    );
}

export default PetList;
