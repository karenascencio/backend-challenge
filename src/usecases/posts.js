const Post = require('../models/posts');

function getPosts(){
    return Post.find({});
}

module.exports = {
    getPosts
}

