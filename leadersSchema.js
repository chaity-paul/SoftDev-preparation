const mongoose = require('mongoose')
const leadersSchema = new mongoose.Schema({
    "name": String,
    "description": String
})

const Leaders = new mongoose.model('leaders', leadersSchema)

module.exports = Leaders
