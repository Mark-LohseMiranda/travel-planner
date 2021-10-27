const sequelize = require('../config/connection');
const { Traveller, Location, Trip } = require('../models');

const seed = async() => {
  const userData = await Traveller.bulkCreate([
    {
      name: "Traveler 1",
      email: "traveler1@email.com"
    },
    {
      name: "Traveler 2",
      email: "traveler1@email.com"
    },
    {
      name: "Traveler 3",
      email: "traveler1@email.com"
    },
    {
      name: "Traveler 4",
      email: "traveler1@email.com"
    },
  ])
  const locationData = await Location.bulkCreate([
    {
      location_name: "Cancun"
    },
    {
      location_name: "Detroit"
    },
    {
      location_name: "New York"
    },
    {
      location_name: "Paris"
    },
    {
      location_name: "London"
    },
  ])
}

sequelize.sync({force:true}).then(()=>{
  seed();
})
