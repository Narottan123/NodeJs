const mongoose=require('mongoose');

const bookschema=new mongoose.Schema({
    bookName:String,
    authorid:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'authorsection'
    },
    price:Number,
    rating:Number,
    publisherid:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"publishersection"
    }
},{timestamp:true});
module.exports=mongoose.model('booksection',bookschema);