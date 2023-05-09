const model=require('../model/model1')
const jwt=require("jsonwebtoken")
const mongoose=require("mongoose")

const createuser=async function(req,res){
     try{
        let data=req.body
        let saveddata=await model.create(data);
        res.status(200).send({data:saveddata})
     }
     catch{
        res.status(500).send('something went wrong');
     }    
}

const loginuser=async function(req,res){
    
    try{
        const {email,password}=req.body;
        let user=await model.findOne({emailId:email,password:password})
        if(!user){
            return res.send({message:'email and password is invalid'})
        }
        let token=jwt.sign('user','secretkey')
        res.setHeader("x-token",token)
        return res.send({status:true,data:token})
        

    }
    catch(error){
        console.log(error)
    }
}
function verifyToken(req,res,next){
    const bearerheader=req.headers['token'];
    if(typeof(bearerheader)!=='undefined'){
        const bearer=bearerheader.split(" ");
        const token=bearer[1];
        req.token=token;
        next();
    }
    else{
     res.send({'message':'Token is not available'})
    }
 }
const usercheck=async (req,res)=>{
    try{
        let jetdata=await jwt.verify(req.token,'secretkey')
        if(!jetdata){
            return res.send({message:"invalid token"})
        }
        let path_params=req.params.userid;
        console.log(path_params)
        if (!mongoose.Types.ObjectId.isValid(path_params)) {
            return res.send({ message: 'invalid user id' });
        }
        
        let result=await model.findOne({_id:path_params})
        if(!result){
            return res.send({"message":"id is invalid"})
        }
        return res.send({message:result})
    
        
    }
    catch(error){
        console.log(error)
    }
}
const userupdate=async (req,res)=>{
    try{
        let jetdata=await jwt.verify(req.token,'secretkey')
        if(!jetdata){
            return res.send({message:"invalid token"})
        }
        let path_params=req.params.userid;
        console.log(path_params)
        if (!mongoose.Types.ObjectId.isValid(path_params)) {
            return res.send({ message: 'invalid user id' });
        }
        
        let result=await model.findOneAndUpdate({_id:path_params},{$set:{firstName:"asim"}},{new:true})
        if(!result){
            return res.send({"message":"id is invalid"})
        }
        return res.send({message:result})
    
        
    }
    catch(error){
        console.log(error)
    }
}
const userdelete=async (req,res)=>{
    try{
        let jetdata=await jwt.verify(req.token,'secretkey')
        if(!jetdata){
            return res.send({message:"invalid token"})
        }
        let path_params=req.params.userid;
        console.log(path_params)
        if (!mongoose.Types.ObjectId.isValid(path_params)) {
            return res.send({ message: 'invalid user id' });
        }
        
        let result=await model.findOneAndUpdate({_id:path_params},{$set:{isDeleted:true}},{new:true})
        if(!result){
            return res.send({"message":"id is invalid"})
        }
        return res.send({message:result})
    
        
    }
    catch(error){
        console.log(error)
    }
}



module.exports.createuser=createuser;
module.exports.loginuser=loginuser;
module.exports.verifyToken=verifyToken
module.exports.usercheck=usercheck
module.exports.userupdate=userupdate
module.exports.userdelete=userdelete