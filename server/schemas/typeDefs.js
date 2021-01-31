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
<<<<<<< HEAD
    _id: ID
    name: String!
    type: String
=======
    _id: ID!,
    name: String!,
    type: String!,
>>>>>>> 9cfb844ed4b7c91f538244ff72fafa383ec84b8a
    age: Int,
    gender: String,
    breed: String,
    fixed: Boolean,
    location: Int,
    description: String,
    personality: String,
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
    login(username: String!, password: String!): Auth
    addOwnedPet(name: String!, type: String!, age: Int, gender: String, breed: String, fixed: Boolean, location: Int!, description: String!, available: Boolean): Pet
  }
`;

module.exports = typeDefs;