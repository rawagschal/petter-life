//import the gql tagged template function
const { gql } = require("apollo-server-express");


// create our typeDefs
const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
<<<<<<< HEAD
    phoneNumber: String
=======
    phoneNumber: Int
>>>>>>> d834a42223241fab97cfbb9a18fa0693b8c836d9
    likedPets: [Pet]
    ownedPets: [Pet]
  }

  type Pet {
    _id: ID
    name: String!
<<<<<<< HEAD
    type: String
    age: Int
    gender: String
    breed: String
    fixed: Boolean
    location: Int
    description: String
=======
    type: [String]
    age: Int,
    gender: String,
    breed: String,
    fixed: Boolean,
    location: Int,
    description: String,
    personality: String,
>>>>>>> d834a42223241fab97cfbb9a18fa0693b8c836d9
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
<<<<<<< HEAD
    addPet(
      name: String!
      type: String
      age: Int
      gender: String
      breed: String
      fixed: Boolean
      location: Int
      description: String
      available: Boolean
    ): Pet

=======
>>>>>>> d834a42223241fab97cfbb9a18fa0693b8c836d9
    # addPet(pets: [ID]!: User.pets)
    # addSavedPet(pets: [ID]!: User.savedPets)
  }
`;

// export the typeDefs
module.exports = typeDefs;
