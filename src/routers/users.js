const express = require('express')
const router = express.Router()
const users = require('../usecases/users')

router.post('/', async (request, response) => {
    try{
        const userData = request.body
        const userCreated = await users.create(userData)
        response.json({
            success: true,
            message: 'Successfully created!',
            data: {
                userCreated
            }
        })
    } catch (error) {
        response.status(400)
        response.json({
            success: false,
            message: 'Error to create user',
            error: error.message
        })
    }
    })

module.exports = router