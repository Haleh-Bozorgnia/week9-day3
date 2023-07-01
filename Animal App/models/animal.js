const mongoose = require('./connection');
//create SCHEMA

const animalSchema = new mongoose.Schema({
    species: String,
    extinct: Boolean,
    location: String,
    lifeExpectancy: Number
})

//create our model in database
const Animal = mongoose.model('animal',animalSchema)

module.exports = Animal