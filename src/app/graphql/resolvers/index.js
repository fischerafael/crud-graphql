const User = require("../../database/Models/User");
const { userService } = require("../../services/user");

const resolvers = {
  Query: {
    user: async (_, { id }) => await userService.show(id),
    users: async () => await userService.index(),
  },
  Mutation: {
    create: async (_, { email }) => await userService.create(email),
    update: async (_, { id, email }) => await userService.update(id, email),
    delete: async (_, { id }) => await userService.delete(id),
  },
};

module.exports = {
  resolvers,
};
