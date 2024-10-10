var express=require('express')
var app=express();
var  mongoose=require('mongoose')
var users=[
    {
      username:"nani",
      password:"123"
    },
    {
      username:"sonu",
      password:"345"
    }
]

mongoose.connect(process.env['MONGO_URL']) 

//nodemon --env-file=.env server.js

console.log("Environment is::",process.env['MONGO_URL'])
var cookiParser=require('cookie-parser')

var session=require('express-session')

var order=require('./routes/order.route')
// console.log(order)

var product=require('./routes/product.route')
// console.log(product)

app.use(cookiParser())
app.use(session({
    secret:'ado okati'
}))

 app.get('/login',function(req,res){
    // console.log(req.session)

    var x=users.some((user)=>{
        if(user.username===req.query.username && user.password===req.query.password){
            return true
        }
        else{
            res.sendFile(__dirname+'/Errorlogin.html')
        }
    })

    if(x){
        console.log("hiii")    
        req.session.username=req.query.username;
        req.session.password=req.query.password;
        console.log(req.session)
        res.redirect('/')
    }
    

 }) 

function checklog(req,res,next){
    // console.log(req.session.username)
    if(req.session.username){
        next()
    }
    else{
        res.sendFile(__dirname+"/login.html")
        
    }  
   
}
  app.use(checklog)


  app.use('/orders',order)
  app.use('/products',product)


   app.get('/',function(req,res){
    res.send("Hii this req is from root route")
   
 })
app.get('/abc',function(req,res){
    res.send('this is from abc route')
})

app.get('/xyz',function(req,res){
    res.send("This req is from xyz route")
})


app.get("**",function(req,res){
    res.send("Cannot Lood this page 404 Error")
})

app.listen(process.env.PORT,()=>{
    console.log("Server running on 4300 port...!")
})