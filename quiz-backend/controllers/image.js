const multer = require('multer')

let storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './public/img')
  },
  filename: function (req, file, cb) {
    const mimeExtension = {
      'image/png': '.png',
      'image/svg': '.svg'
    }
    cb(null, file.originalname.split('.')[0] + '.' + Date.now() + mimeExtension[file.mimetype])
  }
})


const uploadImage = multer({
  storage: storage,
    fileFilter: (req, file, cb) => {
      
    if (
      file.mimetype === 'image/png' ||
      file.mimetype === 'image/svg') {
      cb(null, true)
    } else {
      cb(null, false)
      req.fileError = 'File format is not valid'
    }
  }
}).single('image')

module.exports = {uploadImage}
