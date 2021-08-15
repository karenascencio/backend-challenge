const Post = require('../models/posts');

function getPosts(){
    return Post.find({});
}
function getPostById(id){
    return Post.findById(id);
}
function createPost(post){
    return Post.create(post);
}
function updatePostbyId(id,newData){
    return Post.findByIdAndUpdate(id, newData);  
}
function deletePostById(id){
    return Post.findByIdAndRemove(id);
}

module.exports = {
    getPosts,
    getPostById,
    createPost,
    updatePostbyId,
    deletePostById
}

