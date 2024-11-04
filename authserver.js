var express=require('express')
var app=express()

var mongoose=require('mongoose')
var cors=require("cors")
var bodyparser=require("body-parser")

var  jwt=require('jsonwebtoken')
mongoose.connect(process.env['MONGO_URL'])

var UserRouter=require('./routes/user.router')
var ProductRouter=require('./routes/product.route')

app.use(cors())
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended:false}))

app.use('/user',UserRouter)

function auth(req,res,next){
    var x=jwt.verify(req.headers.authorization,"this is secret key")
  
    next()
}

app.use('/product',auth,ProductRouter)


app.listen(4000,()=>{console.log("Server running on 4000 port enjoy ...!")})
