const express = require('express');
const server = express();
const usersRouter = require('./routers/users');
const postsRouter = require('./routers/posts');
const authRouter = require('./routers/auth');
const cors = require('cors');
//corregimos los errores de la karen
server.use(express.json());
server.use(express.urlencoded());


server.use(cors({
    origin:'*'
}))
server.use('/users', usersRouter)
server.use('/posts', postsRouter)
server.use('/auth', authRouter)
server.get('/image',(request,response)=>{
    response.send(`<form action="/image" method="post" enctype="multipart/form-data">
    <label for="image"><input type="file" id="image" name="image">
    <button type="submit">Enviar</button>
  </form>`)
    
})

const multer = require("multer");
const path = require('path')
const imageStorage = multer.diskStorage({
    // Destination to store image     
    destination: 'images', 
      filename: (req, file, cb) => {
          cb(null, file.fieldname + '_' + Date.now() 
             + path.extname(file.originalname))
            // file.fieldname is name of the field (image)
            // path.extname get the uploaded file extension
    }
});

const imageUpload = multer({
    storage: imageStorage,
    limits: {
      fileSize: 1000000 // 1000000 Bytes = 1 MB
    },
    fileFilter(req, file, cb) {
      if (!file.originalname.match(/\.(png|jpg)$/)) { 
         // upload only png and jpg format
         return cb(new Error('Please upload a Image'))
       }
     cb(undefined, true)
  }
}) 

server.post('/image',imageUpload.single('image'),(request,response)=>{
    console.log(request.body)
    //path:
    console.log(request.file)
    var AWS = require("aws-sdk");
AWS.config.getCredentials(function(err) {
  if (err) console.log(err.stack);
  // credentials not loaded
  else {
    console.log("Access key:", AWS.config.credentials.accessKeyId);
  }
});
AWS.config.update({region: 'us-east-2'});
console.log("Region: ", AWS.config.region);

// Create S3 service object
s3 = new AWS.S3({apiVersion: '2006-03-01'});

// call S3 to retrieve upload file to specified bucket
var uploadParams = {Bucket:'image-dev-to', Key: '', Body: ''};
var file = request.file.path;

// Configure the file stream and obtain the upload parameters
var fs = require('fs');
var fileStream = fs.createReadStream(file);
fileStream.on('error', function(err) {
  console.log('File Error', err);
});
uploadParams.Body = fileStream;
var path = require('path');
uploadParams.Key = path.basename(file);

// call S3 to retrieve upload file to specified bucket
s3.upload (uploadParams, function (err, data) {
  if (err) {
    console.log("Error", err);
  } if (data) {
      //aqui tenemos acceso a la url donde gaurdamos nuestra imagen en el bucket
    console.log("Upload Success", data.Location);
  }
});
    response.end()
})

module.exports = server
