var express=require('express')
var router=express.Router()

router.get('/allproducts',function(req,res){
    res.send("This is from all products route")
})

router.get('/conformproducts',function(req,res){
    res.send(" This is from all conform products")
})
 router.get('/best/:pn',function(req,res){
    res.send(`${req.params.pn} related products thesuko mawa `)
 })
 module.exports=router