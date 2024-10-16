var express=require('express')
var router=express.Router()

var Product=require('../models/product.model')


router.get('/',function(req,res){
   res.send("This is root route of products")
})


router.get('/allproducts',function(req,res){
    // res.send("This is from all products route")
    Product.find({}).then((data)=>{
      res.send(data)
      console.log(data)
    })
})

router.get('/conformproducts',function(req,res){
    res.send(" This is from all conform products")
})
 router.get('/best/:pn',function(req,res){
    res.send(`${req.params.pn} related products thesuko mawa `)
 })

 router.get('**',function(req,res){
    res.send("Error 404 not found")
 })
 module.exports=router