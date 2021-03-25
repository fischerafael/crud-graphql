const { gql } = require("apollo-server");

const typeDefs = gql`
  type User {
    id: ID!
    email: String!
  }
  type Parking {
    id: ID
    price: Float!
    name: String!
    whats: Int!
    lat: Float!
    long: Float!
    owner: String!
  }

  type Query {
    users: [User!]!
    user(id: ID!): User
  }
  type Mutation {
    createUser(email: String!): User!
    updateUser(id: ID!, email: String): User!
    deleteUser(id: ID!): User!
    createParking(
      price: Float!
      name: String!
      whats: Int!
      lat: Float!
      long: Float!
      owner: ID!
    ): Parking!
  }
`;

module.exports = {
  typeDefs,
};
