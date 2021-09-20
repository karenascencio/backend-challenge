const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        minLength: 2,
        maxLength: 50,
        required:false
    },
    joinDate: {
        type: String,
        minLength: 2,
        maxLength: 50,
        required:false,
        match: /\d{2}\s\w{3}\.\s\d{4}/
    },
    bio: {
        type: String,
        minLength: 2,
        maxLength: 100,
        required:false
    },
    nationality: {
        type: String,
        minLength: 2,
        maxLength: 50,
        required:false
    },
    // .: Se agregan los campos requeridos para el login y la Auth.
    username: {
        type: String,
        minLength: 4,
        maxLength: 50,
        required:false
    },
    location:{
        type: String,
        required:false
    },
    education:{
        type: String,
        required:false
    },
    password: {
        type: String,
        required:false
            },
    email: {
        type: String,
        required:false,
        match: /.*@.*\..*/,
    },
    posts:{
        type:[{ type: mongoose.Schema.Types.ObjectId, ref: 'posts' }],
        default:[]
    }
},{ timestamps: true })

const model = mongoose.model('users', userSchema)

module.exports = model