//en el schema userSchema (singular)
//en el modelo (plular)
//los modelos se importan en singular.
const server = require('./src/server.js');

const dbConnect = require('./src/lib/db.js')

dbConnect()
    .then(()=>{
        console.log('Database connected');
        server.listen(8080,()=>{
            console.log('server listening on 8085');
        })
    })
    .catch(err=>console.log(err))