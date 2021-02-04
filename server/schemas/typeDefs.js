//import the gql tagged template function
const { gql } = require("apollo-server-express");

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
    name: String
    type: String
    age: Int
    gender: String
    fixed: String
    location: Int
    description: String
  }
  
  type Auth {
    token: ID
    user: User
  }

  # Donation Type
  type Donation {
    paymentIntent: ID
  }
  
  type Query {
    me: User
    user(_id: ID!): User
    pet(_id: ID!): Pet
    myLikedPets: [Pet]
    myOwnedPets: [Pet]
    pets: [Pet]
    donations: [Donation]
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    updateUser(username: String, email: String, password: String): User
    login(username: String!, password: String!): Auth
    addOwnedPet(name: String!, type: String!, age: Int!, gender: String!, fixed: String!, location: Int!, description: String!): Pet
    addLikedPet(_id: ID!) : Pet    
    deleteOwnedPet(petId: ID!): User
    # mutation for payment intent ID of donation
    donation(paymentIntent: ID!): Donation
  }
`;

module.exports = typeDefs;

