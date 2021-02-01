import gql from 'graphql-tag';

export const LOGIN = gql`
  mutation login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

//mutation for when a NEW user signs up - use on signup page
export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

export const ADD_OWNED_PET = gql `
  mutation addOwnedPet($name: String!, $type: String!, $age: Int!, $fixed: String!, $location: Int!, $description: String!, $gender: String!) {
    addOwnedPet(name: $name, type: $type, age: $age, fixed: $fixed, location: $location, description: $description, gender: $gender) {
      # createdAt
      name
      type
      description
      location
      age
      gender
      fixed
    }
  }
`