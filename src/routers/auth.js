const express = require('express')
const auths = require('../usecases/useAuth')
const router = express.Router()


router.post('/login',async (request, response)=> {
    try {
        const {email, password} = request.body;
        const token = await auths.login(email, password)
        //console.log(token)
        response.json({
            success: true,
            message: 'user is logged',
            data:{
                token
            }
        })
    } catch (error){
        response.status(400)
        response.json({
            success: false,
            message:  'Invalid tokensss',
            error: error.message
        })
    }
})
module.exports = router