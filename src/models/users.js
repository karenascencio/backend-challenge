const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        minLength: 2,
        maxLength: 50,
        required: true
    },
    joinDate: {
        name: {
            type: Date,
            minLength: 2,
            maxLength: 50,
            required: true
        }
    },
    bio: {
        name: {
            type: String,
            minLength: 2,
            maxLength: 100,
            required: true
        }
    },
    nationality: {
        name: {
            type: String,
            minLength: 2,
            maxLength: 50,
            required: true
        }
    }
})

const model = mongoose.model('users')

module.exports = model