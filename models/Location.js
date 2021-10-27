const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Location extends Model {}

Location.init({

    location_name: DataTypes.STRING
},
{
    sequelize
}
);

module.exports = Location;