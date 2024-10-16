var mongoose=require('mongoose')

var UserSchema=mongoose.Schema({
    username:String,
    password:Number
})
var User=mongoose.model('user',UserSchema)
module.exports=User