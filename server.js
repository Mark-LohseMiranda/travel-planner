const express = require("express");
const sequelize = require("./config/connection");

// Import models to sync with the database

const app = express();
const PORT = process.env.PORT || 3001;

const {Location,Traveller,Trip} = require("./models");
const routes = require("./controllers");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

// turn on connection to db and server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log("Now listening"));
});
