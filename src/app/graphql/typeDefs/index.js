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
    create(email: String!): User!
    update(id: ID!, email: String): User!
    delete(id: ID!): User!
  }
`;

module.exports = {
  typeDefs,
};
