import gql from "graphql-tag";

export const QUERY_ME = gql`
  {
    me {
      username
      email
      likedPets{
        _id
        name
        type
        age
        location
        fixed
      }
       ownedPets{
         _id
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
      _id
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
