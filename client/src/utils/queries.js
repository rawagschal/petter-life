import gql from 'graphql-tag';

export const QUERY_USER = gql`
{
  user {
    username
<<<<<<< HEAD
<<<<<<< HEAD
    savedPets
    ownedPets
=======
    email
    phoneNumber
    likedPets
    addedPets
>>>>>>> 94356e09e3383617df8074b6f195c90e4ef1614e
=======
    email
    phoneNumber
    likedPets
=======
    savedPets
>>>>>>> e561e459a390fd74186d65d63f0535ab81dbb8d7
    ownedPets
>>>>>>> 26d41271b75c61f7936364e28195921e8085016d
  }
}
`;