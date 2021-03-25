const { ApolloServer } = require("apollo-server");
const { mongo } = require("./database");

const { typeDefs } = require("./graphql/typeDefs");
const { resolvers } = require("./graphql/resolvers");

const app = new ApolloServer({ typeDefs, resolvers });

mongo.connect();

module.exports = {
  app,
};
