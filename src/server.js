const express = require('express')
const server = express()
const usersRouter = require('./routers/users')

server.use(express.json()); 

server.use('/users', usersRouter)

module.exports = server
