const User = require('../models/users')

function create(data){
    return User.create(data)
}