//import the gql tagged template function
const { gql } = require('apollo-server-express');

// create our typeDefs
const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
    phoneNumber: Int
    likedPets: [Pet]
    ownedPets: [Pet]
  }

  type Pet {
    _id: ID
    name: String!
    type: [String]
    age: Int,
    gender: String,
    breed: String,
    fixed: Boolean,
    location: Int,
    description: String,
    available: Boolean
  }
  
  type Auth {
    token: ID
    user: User
  }
  
  type Query {
    user: User
    pet: [Pet]
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    updateUser(username: String, email: String, password: String): User
    login(email: String!, password: String!): Auth

    # addPet(pets: [ID]!: User.pets)
    # addSavedPet(pets: [ID]!: User.savedPets)
  }
`;

// export the typeDefs
module.exports = typeDefs;