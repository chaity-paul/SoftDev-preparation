const mongoose = require('mongoose')
const dishSchema = new mongoose.Schema({
    "name": String,
    "price": Number
})

const Dishes = new mongoose.model('dishes', dishSchema)

module.exports = Dishes
