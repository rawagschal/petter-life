//import the gql tagged template function
const { gql } = require('apollo-server-express');

// create our typeDefs
const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
  },
  type Pet {
    _id: ID
    name: String!
    type: [String]
    age: Int,
    gender: String,
    breed: String,
    fixed: Boolean,
    personality: String,
    location: Int,
    available: Boolean
  }
  type Query {
    helloWorld: String
  }
`;

// export the typeDefs
module.exports = typeDefs;