const express = require('express');
const server = express();
const usersRouter = require('./routers/users');
const postsRouter = require('./routers/posts');
const authRouter = require('./routers/auth');
const cors = require('cors');
//corregimos los errores de la karen
server.use(express.json());
server.use(express.urlencoded());

//quitamos la logica del bucket
server.use(cors({
    origin:'*'
}))
server.use('/users', usersRouter)
server.use('/posts', postsRouter)
server.use('/auth', authRouter)

module.exports = server
