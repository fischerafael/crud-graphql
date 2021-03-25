const { gql } = require("apollo-server");

const typeDefs = gql`
  type User {
    id: ID!
    email: String!
  }

  type Query {
    users: [User!]!
    user(id: ID!): User
  }

  type Mutation {
    createUser(email: String!): User!
    updateUser(id: ID!, email: String): User!
    deleteUser(id: ID!): User!
  }
`;

module.exports = {
  typeDefs,
};
