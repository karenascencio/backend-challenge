const User = require('../model/users');
const bcrypt = require('../lib/bcrypt');
const jwt = requires('../lib/jwt');

async function login(email, password){
    try{
        const emailFound = await User.findOne({email})
        if(!emailFound) throw new Error('Invalid Credentials')
        
        const correctPassword = await bcrypt.compare(password, emailFound.password)
        if(!correctPassword) throw new Error('Invalid Credentials');
        return jwt.sign({id: emailFound._id})
    } catch(error){
        response.json({
            succes: false,
            message: 'Invalid data',
            error: error.message
        })
    }
}

module.exports = {
    login
}