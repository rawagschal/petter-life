import gql from "graphql-tag";

export const QUERY_ME = gql`
  {
    me {
      username
      email
      likedPets{
        name
        type
        age
        location
        fixed
      }
       ownedPets{
        name
        type
        age
        location
        fixed
      }
    }
  }
`;

export const QUERY_USER = gql`
  {
    user {
      username
      email
      phoneNumber
      likedPets
      ownedPets
    }
  }
`;

export const QUERY_PETS = gql`
  {
    pets {
      name
      type
      age
      location
      gender
      description
      location
      fixed
    }
  }
`;
