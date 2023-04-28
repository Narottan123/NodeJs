const mongoose=require("mongoose")
const bookschema=new mongoose.Schema({
      bookName:{
        type:String,
        required:true
      },
      price:{
        indianPrice:{type:String,required:true},
        europeanPrice:{type:String,required:true},
      },
      year:{type:Number,default:2021},
      tag:{type:String},
      authorName:{type:String},
      totalPages:{type:Number},
      stockAvailable:{type:Boolean,default:false}
},{timestamps:true});

module.exports=mongoose.model('bookModel',bookschema);