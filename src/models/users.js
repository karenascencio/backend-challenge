const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        minLength: 2,
        maxLength: 50,
        required: true
    },
    joinDate: {
        type: String,
        minLength: 2,
        maxLength: 50,
        required: true,
        match: /\d{2}\s\w{3}\.\s\d{4}/
    },
    bio: {
        type: String,
        minLength: 2,
        maxLength: 100,
        required: true
    },
    nationality: {
        type: String,
        minLength: 2,
        maxLength: 50,
        required: true
    }
})

const model = mongoose.model('users', userSchema)

module.exports = model