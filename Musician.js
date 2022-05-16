const {sequelize} = require('./db');
const {DataTypes, Model} = require('sequelize');

// TODO - define the Band model
class Musician extends Model {}

Musician.init({
    name : DataTypes.STRING,
    instrament : DataTypes.STRING
},{
    sequelize
});

module.exports = {
    Musician
};