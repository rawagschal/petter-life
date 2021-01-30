//import the gql tagged template function
const { gql } = require('apollo-server-express');

// create our typeDefs
const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
<<<<<<< HEAD
    phoneNumber: Int
    likedPets: [Pet]
    ownedPets: [Pet]
=======
>>>>>>> e561e459a390fd74186d65d63f0535ab81dbb8d7
  }

  type Pet {
    _id: ID
    name: String!
    type: [String]
    age: Int,
    gender: String,
    breed: String,
    fixed: Boolean,
<<<<<<< HEAD
    location: Int,
    description: String,
=======
    personality: String,
    location: Int,
>>>>>>> e561e459a390fd74186d65d63f0535ab81dbb8d7
    available: Boolean
  }
  
  type Auth {
    token: ID
    user: User
  }
  
  type Query {
<<<<<<< HEAD
    user: User
    pet: [Pet]
=======
    user: user
    pets: [Pets]
>>>>>>> e561e459a390fd74186d65d63f0535ab81dbb8d7
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    updateUser(username: String, email: String, password: String): User
<<<<<<< HEAD
    login(email: String!, password: String!): Auth
=======
>>>>>>> e561e459a390fd74186d65d63f0535ab81dbb8d7

    # addPet(pets: [ID]!: User.pets)
    # addSavedPet(pets: [ID]!: User.savedPets)
  }
`;

// export the typeDefs
module.exports = typeDefs;