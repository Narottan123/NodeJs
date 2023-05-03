const mongoose=require('mongoose');

const authorschema=new mongoose.Schema({
    authorName:String,
    age:Number,
    address:String,
    rating:Number
})
module.exports=mongoose.model('authorsection',authorschema);