//en el schema userSchema (singular)
//en el modelo (plular)
//los modelos se importan en singular.
//en los ruters va en plural
const server = require('./src/server.js');

const dbConnect = require('./src/lib/db.js')

dbConnect()
    .then(()=>{
        console.log('Database connected');
        server.listen(8001,()=>{
            console.log('server listening on 8000');
        })
    })
    .catch(err=>console.log(err))