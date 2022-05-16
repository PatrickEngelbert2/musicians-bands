const {sequelize} = require('./db');
const {DataTypes, Model} = require('sequelize');

// TODO - define the Band model
class Song extends Model {}

Song.init({
    name : DataTypes.STRING,
    genre : DataTypes.STRING
},{
    sequelize
})

module.exports = {
    Song
};