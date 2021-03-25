const User = require("../../database/Models/User");

const userService = {
  async index() {
    const users = await User.find();
    return users;
  },
  async show(id) {
    const user = await User.findById(id);
    if (!user) throw new Error("user not found");

    return user;
  },
  async create(email) {
    const hasUser = await User.findOne({ email });
    if (hasUser) throw new Error("user already exists");

    const user = await User.create({ email });
    return user;
  },
  async update(id, email) {
    const hasUser = await User.findOne({ email });
    if (hasUser) throw new Error("user already exists");

    const updatedUser = await User.findOneAndUpdate(
      { _id: id },
      { email },
      {
        new: true,
      }
    );
    return updatedUser;
  },
  async delete(id) {
    const deletedUser = await User.findByIdAndRemove(id);
    if (!deletedUser) throw new Error("user not found");

    return deletedUser;
  },
};

module.exports = {
  userService,
};
