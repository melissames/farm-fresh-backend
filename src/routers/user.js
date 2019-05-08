const express = require('express')
const User = require('../models/user')
const router = new express.Router()

router.post('/users', async (req, res) => {
    const user = new user(req.body)

    try {
        
    } catch (e) {

    }

})

module.exports = router