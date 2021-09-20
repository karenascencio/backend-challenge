const express = require('express')
const router = express.Router()
const Posts = require('../usecases/posts')
const verification = require ('../middlewares/authMiddle') 


//librerias para subir la imagen a bucket
const multer = require("multer");
const path = require('path')
const AWS = require("aws-sdk");
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


//router.use(verification)
router.get('/', async (request, response) => {
    try{
        const posts = await Posts.getPosts()
        response.json({
            success: true,
            message: 'all Post',
            data: {
                posts
            }
        })
    } catch (error) {
        response.status(400)
        response.json({
            success: false,
            message: 'Error to create user',
            error: error.message
        })
    }
})
router.get('/:id', async (request, response) => {
    try{
        const {id} = request.params;
        const post = await Posts.getPostById(id)
        response.json({
            success: true,
            message: `Post con id ${id}`,
            data: {
                post
            }
        })
    } catch (error) {
        response.status(400)
        response.json({
            success: false,
            message: 'Error to create user',
            error: error.message
        })
    }
})
router.post('/',imageUpload.single('image'),async (request,response)=>{
    try{

        //monta esto en la ruta de posts imageUpload.single('image')
//todo esto va dentro de la ruta de poste de post
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
      request.body.cover_image=data.location
    }
  });





        const post = await Posts.createPost(request.body);
        response.json({
            success: true,
            message: `Creamos post exitosamente`,
            data: {
                post
            }
        })
    } catch (error) {
        response.status(400)
        response.json({
            success: false,
            message: 'fallamos a crear un post',
            error: error.message
        })
    }
})
router.patch('/:id', async (request,response)=>{
    try{
        const {id} = request.params
        const post = await Posts.updatePostbyId(id,request.body);
        response.json({
            success: true,
            message: `Actualizamos el post correctamente`,
            data: {
                post
            }
        })
    } catch (error) {
        response.status(400)
        response.json({
            success: false,
            message: 'fallamos al actualizar el post',
            error: error.message
        })
    }
})
router.delete('/:id',async (request,response)=>{
    try{
        const {id} = request.params
        const post = await Posts.deletePostById(id);
        response.json({
            success: true,
            message: `Eliminamos el post correctamente`,
            data: {
                post
            }
        })
    } catch (error) {
        response.status(400)
        response.json({
            success: false,
            message: 'fallamos al eliminar el post',
            error: error.message
        })
    }
})

module.exports = router