const express=require('express')
const router=express.Router()
router.get('/allorders',function(req,res){
    res.send('This is from all orders route')
})
router.get('/conformorders',function(req,res){
    res.send("this is from conform orders")

})
router.get('/rejectorders',function(req,res){
    res.send("This is reject orders")
})
module.exports=router