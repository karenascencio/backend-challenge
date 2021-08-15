const express = require('express')
const router = express.Router()
const Posts = require('../usecases/posts')



router.get('/', async (request, response) => {
    try{
        const posts = await Posts.getPosts()
        response.json({
            success: true,
            message: 'todos los Post',
            data: {
                posts
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