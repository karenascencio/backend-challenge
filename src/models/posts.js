/*
content: "Esto es el contenido de mi post"
cover_image: "https://picsum.photos/200/300.jpg"
positive_reactions_count: 93
published_at: "2021-07-20T02:14:11.023Z"
published_timestamp: "2021-07-20T02:14:11.023Z"
readable_publish_date: "Jul 19"
reading_time_minutes: 6
tag_list:["Tagdemo1","tagdemo2"]
tags: "Tagdemo1 tagdemo2"
title: "Titulo de prueba de Post Demo"
user:referencia user.
*/

const user = require('./users')
const mongoose = require('mongoose');
//Schema 
const postSchema = new mongoose.Schema({
    content:{
        type:String,
        required:true,
        minLength:20,
        maxLength:1000,
    },
    cover_image:{
        type:String,
        required:true,
    },
    positive_reactions_count:{
        type:Number,
        default:0,
        min:0,
    },
    published_at:{
        type:String,
        required:true,
        match:/\d{4}-\d{2}-\d{2}.{1}\d{2}:\d{2}:\d{2}.\d{3}.{1}/g
    },
    published_timestamp:{
        type:String,
        required:true,
        match:/\d{4}-\d{2}-\d{2}.{1}\d{2}:\d{2}:\d{2}.\d{3}.{1}/g
    },
    readable_publish_date:{
        type:String,
        required:true,
        match:/\w{3}\s\d{2}/g
    },
    reading_time_minutes:{
        type:Number,
        required:true
    },
    tag_list:{
        type:[String],
        required:true
    },
    tags:{
        type:String,
        required:true
    },
    title:{
        type:String,
        required:true
    },
    user:{ type: mongoose.Schema.Types.ObjectId, ref: 'users' }
})
//model
const model = mongoose.model('posts',postSchema);
module.exports = model