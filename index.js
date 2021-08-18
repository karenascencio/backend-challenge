//en el schema userSchema (singular)
//en el modelo (plular)
//los modelos se importan en singular.
//en los ruters va en plural
require('dotenv').config()
const server = require('./src/server.js');

const dbConnect = require('./src/lib/db.js')

dbConnect()
    .then(()=>{
        console.log('Database connected');
        server.listen(8000,()=>{
            console.log('server listening on 8000');
        })
    })
    .catch(err=>console.log(err))