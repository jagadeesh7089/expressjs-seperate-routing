var express=require('express')
var app=express();

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

var cookiParser=require('cookie-parser')

var session=require('express-session')

app.use(cookiParser())
app.use(session({
    secret:'ado okati'
}))

//  app.get('/login',function(req,res){

//  }) 

function checklog(req,res,next){
    if(req.session.username){
        next()
    }
    else{
        res.redirect('/login.html')
    }
}

app.get('/',function(req,res){
    res.send("Hii this req is from root route")
})


app.listen(4300,()=>{
    console.log("Server running on 4300 port...!")
})