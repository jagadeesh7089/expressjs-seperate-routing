var express=require('express')
var router=express.Router()
var jwt=require('jsonwebtoken')
var UserModel=require('../models/user.model')

router.post('/register',function(req,res){
    var newuser=new UserModel(req.body)
    newuser.save()
    res.send({message:"succesed"})
})
router.post('/login',function(req,res){
    UserModel.find(req.body).then((data)=>{
        if(data[0].length===0){
            res.json({message:"failed"})
        }
        else{
            var token=jwt.sign(req.body,'this is secret key')
            res.json({message:"succesed",token})

        }
    })
})
module.exports=router