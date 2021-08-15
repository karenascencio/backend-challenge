//definicion de servidor
const express = require('express');
const server = express();

server.get('/',(request,response)=>{
    response.send('hola mundo');
})

module.exports = server
