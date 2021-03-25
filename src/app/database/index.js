const mongoose = require("mongoose");

const mongo = {
  async connect() {
    mongoose.connect(
      process.env.MONGO_URL,
      {
        useFindAndModify: false,
        useNewUrlParser: true,
        useUnifiedTopology: true,
      },
      () => console.log("Connected to MongoDB")
    );
  },
};

module.exports = {
  mongo,
};
