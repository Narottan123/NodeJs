//const mongoose=require("mongoose")
const model=require('../model/usermodel')
const model1=require('../model/usermodel1')

const createauthor=async function(req,res){
     try{
        let data=req.body
        let saveddata=await model.create(data);
        res.status(200).send({data:saveddata})
     }
     catch{
        res.status(500).send('somethinf went wrong');
     }    
}
const createbook=async function(req,res){
    try{
        let data=req.body
        let saved=await model1.create(data)
        res.status(200).send({data:saved});
    }
    catch{
        res.status(500).send('something went wrong');
    }
}
const search_by_authorid=async function(req,res){
    try{
        let author=await model.findOne({author_name:"Chetan Bhagat"},{author_id:1})
        let book=await model1.find ({author_id:author.author_id},{name:1})
        res.status(200).send(book);
        console.log(book)
        console.log(author)
    }
    catch(error){
        console.log(error)
        res.status(500).send("something went wrong")
    }
}
const update_price=async function(req,res){
    try{
        let book="Two states";
        let author=await model1.findOneAndUpdate(
            {name:book},
            {$set:{
                price:100
            }},
            {new:true,upsert:true}
        );
        res.status(200).send(author)
    }
    catch{
        res.status(500).send("something went wrong")
    }
}
const findauthor=async function(req,res){
    try{
        let author=await model1.find({price:{$gte:50,$lte:100}}).select({author_id:1})
        
    }
    catch{

    }
}
module.exports.createauthor=createauthor
module.exports.createbook=createbook
module.exports.search_by_authorid=search_by_authorid
module.exports.update_price=update_price
module.exports.findauthor=findauthor