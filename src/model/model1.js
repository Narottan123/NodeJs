const mongoose=require('mongoose')

const userschema=new mongoose.Schema({
    firstName:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
        required:true
    },
    mobile:{
        type:Number,
        required:true
    },
    emailId:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    isDeleted:{
        type:Boolean,
        default:false
    },
    age:{
        type:Number,
        required:true
    }
},{timestamps:true})
module.exports=mongoose.model('authdeails',userschema);