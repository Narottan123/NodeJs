const usermodel=require("../models/usermodel")
const createBook=async function(req,res){
    let data=req.body;
    let saveddata=await usermodel.create(data)
    res.send({data:saveddata})
}
const bookList=async function(req,res){
    let data=await usermodel.find({},{bookName:1,authorName:1})
    res.send({msg:data})
}
const getBooksInYear=async function(req,res){
    let data=req.body.year;
    let book=await usermodel.find({year:data})
    res.send(book)
}
const getRandomBooks=async function(req,res){
    let book1=await usermodel.find({$or:[{stockAvailable:false},{totalPages:{$gt:500}}]});
    res.send(book1)
}

module.exports.createBook=createBook
module.exports.bookList=bookList
module.exports.getBooksInYear=getBooksInYear
module.exports.getRandomBooks=getRandomBooks
