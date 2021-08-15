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
router.get('/:id', async (request, response) => {
    try{
        const {id} = request.params;
        const post = await Posts.getPostById(id)
        response.json({
            success: true,
            message: `Post con id ${id}`,
            data: {
                post
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
router.post('/',async (request,response)=>{
    try{
        const post = await Posts.createPost(request.body);
        response.json({
            success: true,
            message: `Creamos post exitosamente`,
            data: {
                post
            }
        })
    } catch (error) {
        response.status(400)
        response.json({
            success: false,
            message: 'fallamos a crear un post',
            error: error.message
        })
    }
})
router.patch('/:id',async (request,response)=>{
    try{
        const {id} = request.params
        const post = await Posts.updatePostbyId(id,request.body);
        response.json({
            success: true,
            message: `Actualizamos el post correctamente`,
            data: {
                post
            }
        })
    } catch (error) {
        response.status(400)
        response.json({
            success: false,
            message: 'fallamos al actualizar el post',
            error: error.message
        })
    }
})
router.delete('/:id',async (request,response)=>{
    try{
        const {id} = request.params
        const post = await Posts.deletePostById(id);
        response.json({
            success: true,
            message: `Eliminamos el post correctamente`,
            data: {
                post
            }
        })
    } catch (error) {
        response.status(400)
        response.json({
            success: false,
            message: 'fallamos al eliminar el post',
            error: error.message
        })
    }
})

module.exports = router