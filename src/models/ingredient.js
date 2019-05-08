const mongoose = require('mongoose')
const validator = require('validator')

const Ingredient = mongoose.model('Ingredient', {
    name: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    }
})

module.exports = Ingredient