import gql from 'graphql-tag';

export const QUERY_USER = gql`
{
  user {
    username
<<<<<<< HEAD
    email
    phoneNumber
    likedPets
=======
    savedPets
>>>>>>> e561e459a390fd74186d65d63f0535ab81dbb8d7
    ownedPets
  }
}
`;