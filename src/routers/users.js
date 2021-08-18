const express = require('express')
const router = express.Router()
const users = require('../usecases/users')
const verification = require ('../middlewares/authMiddle') 

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

router.get('/', verification, async (request, response) => {
    try{
        const allUsers = await users.getAll()
        response.json({
            success: true,
            message: "All dev.to users",
            data: {
                allUsers
            }
        })
    } catch (error) {
        response.status(400)
        response.json({
            success: false,
            message: 'Error to get all users',
            error: error.message
        })
    }
})

router.get('/:id', verification, async (request, response) => {
    try{
        const { id } = request.params
        const getUser = await users.getById(id)
        response.json({
                success: true, 
                message: "Here is the user",
                data: {
                    user: getUser
                }
            })
    } catch (error){
        response.status(400)
        response.json({
            success: false,
            message: 'Error to get user',
            error: error.message
        })
    }
})

router.patch('/:id', verification, async (request, response) => {
    try{
        const { id } = request.params
        const { body } = request
        
        const userUpdated = await users.updateById(id, body)

        response.json({
            success: true,
            message: 'User updated!',
            data: {
                user: userUpdated
            }
        })
    } catch (error){
        response.status(400)
        response.json({
            success: false,
            message: 'Error to update user',
            error: error.message
        })
    }
})

router.delete('/:id', verification, async (request, response) => {
    try{
        const { id } = request.params
        const deletedUser = await users.remove(id)
        response.json({
                success: true, 
                message: "Successfully deleted!",
                data: {
                    deletedUser
                }
            })
    } catch (error){
        response.status(400)
        response.json({
            success: false,
            message: 'Error to delete user',
            error: error.message
        })
    }
})

module.exports = router