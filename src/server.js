const express = require('express');
const server = express();
const usersRouter = require('./routers/users');
const postsRouter = require('./routers/posts');


server.use(express.json()); 

server.use('/users', usersRouter)
server.use('/posts', postsRouter)


module.exports = server
