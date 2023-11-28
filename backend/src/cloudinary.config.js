const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const multer = require('multer');

cloudinary.config({ 
  cloud_name: 'dyvuguwyu', 
  api_key: '683931648618198', 
  api_secret: 'dZJann98lQ3pvIdfX4Ci_yWvuBs' 
});

 const storage = new CloudinaryStorage({
  cloudinary,
  allowedFormats: ['jpg', 'png'],
   filename: function (req, file, cb) {
     cb(null, file.originalname);
   },
 });

// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, 'uploads')
//   },
//   filename: (req, file, cb) => {
//     cb(null, file.fieldname + '-' + Date.now() + '.jpg')
//   }
// });

const uploadCloud = multer({ storage });

module.exports = uploadCloud;
