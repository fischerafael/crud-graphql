require("dotenv").config();

const { app } = require("./app");

app.listen().then(({ url }) => console.log(`Server running on ${url}`));
