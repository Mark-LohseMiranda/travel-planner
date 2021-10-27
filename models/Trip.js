const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Trip extends Model {}

Trip.init({

    trip_budget: {
        type: DataTypes.INTEGER
    },
    traveller_amount: {
        type: DataTypes.INTEGER
    },
    traveller_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'traveller',
            key: 'id'
        }
    },
    location_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'location',
            key: 'id'
        }
    }
},
{
    sequelize
}
);

module.exports = Trip;