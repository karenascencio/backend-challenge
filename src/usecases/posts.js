const Post = require('../models/posts');

async function getPost(){
    let posts = await Post.find({});
    console(posts);
}

getPost();