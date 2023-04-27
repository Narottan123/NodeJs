const usermodel=require("../models/usermodel")
const createbook=async function(req,res){
    let data=req.body;
    let saveddata=await usermodel.create(data)
    res.send({data:saveddata})
}
const bookdetails=async function(req,res){
    let data=await usermodel.find()
    res.send({msg:data})
}
module.exports.createbook=createbook
module.exports.bookdetails=bookdetails
