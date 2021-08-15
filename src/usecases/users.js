const User = require('../models/users')
const Bcrypt = require('../lib/bcrypt') // importamos bcrypt

function create(data){
    return User.create(data)
}

function getAll(){
    return User.find()
}

function getById(id){
    return User.find({_id: id})
}

function updateById(id, newData) { 
    return User.findByIdAndUpdate(id, newData, {new: true})
}

function remove(id){
    return User.findByIdAndDelete(id)
}

module.exports = {
    create,
    getAll,
    getById,
    updateById,
    remove
}



