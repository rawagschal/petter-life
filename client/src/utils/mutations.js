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
  mutation addOwnedPet($name: String!, $type: String!, age: Int!, gender: String, $breed: String, $fixed: Boolean, $location: Int!, $description: String!, $available: Boolean) {
    addOwnedPet(name: $name, type: $type, age: $age, gender: $gender, breed: $breed, fixed: $fixed, location: $location, description: $description, available: $available) {
      createdAt
      name
      type
      description
      location
    }
  }
`