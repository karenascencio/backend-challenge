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
    },
    // .: Se agregan los campos requeridos para el login y la Auth.
    username: {
        type: String,
        minLength: 4,
        maxLength: 50,
        required: true
    },
    location:{
        type: String,
        required: true
    },
    education:{
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
            },
    email: {
        type: String,
        required: true,
        match: /.*@.*\..*/,
    },
    posts:{
        type:[{ type: mongoose.Schema.Types.ObjectId, ref: 'posts' }],
        default:[]
    }
},{ timestamps: true })

const model = mongoose.model('users', userSchema)

module.exports = model