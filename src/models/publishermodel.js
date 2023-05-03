const mongoose=require('mongoose');

const publisherschema=new mongoose.Schema({
    name:String,
    headQuarter:String
},{timestamp:true});
module.exports=mongoose.model('publishersection',publisherschema);