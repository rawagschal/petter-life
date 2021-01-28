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
    name: String
    kind: Array
    location: Number
    description: String
  }
  type Query {
    helloWorld: String
  }
`;

// export the typeDefs
module.exports = typeDefs;