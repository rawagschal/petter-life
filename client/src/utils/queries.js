import gql from 'graphql-tag';

export const QUERY_USER = gql`
{
  user {
    username
<<<<<<< HEAD
    savedPets
    ownedPets
=======
    email
    phoneNumber
    likedPets
    addedPets
>>>>>>> 94356e09e3383617df8074b6f195c90e4ef1614e
  }
}
`;