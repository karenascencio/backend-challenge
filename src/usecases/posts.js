const Post = require('../models/posts');
const User = require('../models/users');

function getPosts(){
    return Post.find({}).populate('user');
}
function getPostById(id){
    return Post.findById(id).populate('user');
}
async function createPost(post){
    let newPost =  await Post.create(post);
    //let user = await User.findById(newPost.user);
    //let {posts,_id} = user;
    //let updatedPosts = [...posts,newPost._id];
    //let updatedUser = await User.findByIdAndUpdate({_id},{posts:updatedPosts})
    //console.log(updatedUser);
    return newPost
}
function updatePostbyId(id,newData){
    return Post.findByIdAndUpdate(id, newData,{new: true});  
}
function addCommentByPostId(_id,newComment){
    return Post.findByIdAndUpdate({_id}, {
            $push: {comments: newComment} },{new: true});  
}
function deletePostById(id){
    return Post.findByIdAndRemove(id);
}

module.exports = {
    getPosts,
    getPostById,
    createPost,
    updatePostbyId,
    addCommentByPostId,
    deletePostById
}

