const User = require('../models/users')
const Bcrypt = require('../lib/bcrypt') // importamos bcrypt


async function create(data){
    try{
        let {email, password} = data
        let emailExist = await User.findOne({email});
        if(emailExist) throw new Error('The email is already in use');

        let encryptedPassword = await Bcrypt.hash(password);
        return User.create({...data, password: encryptedPassword});
    } catch(error){console.log(error.message)}
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