const mongoose = require('mongoose')
const validator = require('validator')

const PlanType = mongoose.model('PlanType', {
    name: {
        type: String,
        required: true
    },
    plan: {
        type: String,
        required: true
    },
    frequency: {
        type: String,
        required: true
    }
})

module.exports = PlanType