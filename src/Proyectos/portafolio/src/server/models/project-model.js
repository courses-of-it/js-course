'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ProjectSchema = Schema({
    name: String,
    description: String,
    category: String,
    year: Number,
    langs: String,
    image: String

})
//define coleccion el primer parametro del mongoose.model
module.exports = mongoose.model('Project', ProjectSchema)