const mongoose = require('mongoose')
const DB_USER = "jorgeCastuera";
const DB_PASSWORD = "megamanzeroaxlx1";
const DB_HOST = "cluster0.omvx8.mongodb.net";
const DB_NAME = "kodemia";

const url = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`





function connect(){
    return mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true,useFindAndModify:false})
}
module.exports = connect;