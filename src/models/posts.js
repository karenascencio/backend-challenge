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
//Schema modificado para permitir todo
const postSchema = new mongoose.Schema({
    content:{
        type:String,
        required:false,
        //minLength:20,
        //maxLength:1000,
    },
    cover_image:{
        type:String,
        required:false,
    },
    positive_reactions_count:{
        type:Number,
        default:0,
        min:0,
    },
    published_at:{
        type:Date,
        required:false,
        // match:/\d{4}-\d{2}-\d{2}.{1}\d{2}:\d{2}:\d{2}.\d{3}.{1}/g
    },
    published_timestamp:{
        type:Date,
        required:false,
        // match:/\d{4}-\d{2}-\d{2}.{1}\d{2}:\d{2}:\d{2}.\d{3}.{1}/g
    },
    readable_publish_date:{
        type:String,
        required:false,
        match:/\w{3}\s\d{2}/g
    },
    reading_time_minutes:{
        type:Number,
        required:false
    },
    tag_list:{
        type:[String],
        required:false
    },
    tags:{
        type:String,
        required:false
    },
    title:{
        type:String,
        required:false
    },
    user:{ type: mongoose.Schema.Types.ObjectId, ref: 'users' ,required:false}
},{ timestamps: true })
//model
const model = mongoose.model('posts',postSchema);
module.exports = model