const {sequelize} = require('./db');
const {DataTypes, Model} = require('sequelize');

// TODO - define the Band model
class Band extends Model {}

Band.init({
    name : DataTypes.STRING,
    genre : DataTypes.STRING
},{
    sequelize
});

module.exports = {
    Band
};