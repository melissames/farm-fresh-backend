const mongoose = require('mongoose')
const validator = require('validator')

mongoose.connect('mongodb://127.0.0.1:27017/farm-fresh-api', {
    useNewUrlParser: true,
    useCreateIndex: true
})

const User = mongoose.model('User', {
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error('Email is invalid')
            }
        }
    },
    address: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
        minlength: 7,
        trim: true,
        validate(value){
            if(value.toLowerCase().includes("password")){
                throw new Error('password cannot contain "password"')
            }
        }
    }
})

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


// const me = new User({
//     name: 'Melissa', address: "New York", email: "melissa.samesgmail.com"
// })

// me.save().then(() =>{
//     console.log(me)
// }).catch((err) => {
//     console.log('error:', err)
// })

// const carrot = new Ingredient({
//         name: 'carrot',
//         quantity: 1
//     })

// carrot.save().then(() => {
//     console.log(carrot)
// }). catch((err) => {
//     console.log(error)
// })