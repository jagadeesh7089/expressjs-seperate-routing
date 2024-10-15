const express = require('express')
const multer  = require('multer')
var fs=require('fs')
const upload = multer({ dest: 'uploads/' })

const app = express()

app.post('/profile', upload.single('avatar'), function (req, res, next) {
  // req.file is the `avatar` file
  // req.body will hold the text fields, if there were any
    fs.rename(req.file.path,`uploads/${req.file.originalname}`,function(err,data){
        console.log(err)
    })
   console.log(req.file)

})

app.listen(3400,()=>{
    console.log("Server running on 3400 port .....!  Enjoy")
})