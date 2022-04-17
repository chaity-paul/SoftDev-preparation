const mongoose = require('mongoose')
const promotionsSchema = new mongoose.Schema({
    "name": String,
    "description": String
})

const Promotions = new mongoose.model('promotions', promotionsSchema)

module.exports = Promotions
