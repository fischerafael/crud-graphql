const Parking = require("../../database/Models/Parking");
const { userService } = require("../../services/user");

const resolvers = {
  Query: {
    user: async (_, { id }) => await userService.show(id),
    users: async () => await userService.index(),
  },
  Mutation: {
    createUser: async (_, { email }) => await userService.create(email),
    updateUser: async (_, { id, email }) => await userService.update(id, email),
    deleteUser: async (_, { id }) => await userService.delete(id),
    createParking: async (_, { price, name, whats, lat, long, owner }) => {
      const location = {
        coordinates: [-122.5, 37.7],
      };
      console.log(location);
      const parking = await Parking.create({
        price,
        name,
        whats,
        owner,
        location: location,
      });

      return parking;
    },
  },
};

module.exports = {
  resolvers,
};
