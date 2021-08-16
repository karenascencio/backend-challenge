const express = require('express');
const server = express();
const usersRouter = require('./routers/users');
const postsRouter = require('./routers/posts');

const cors = require('cors');

server.use(express.json()); 

server.use(cors({
    origin:'*'
}))
server.use('/users', usersRouter)
server.use('/posts', postsRouter)


module.exports = server
