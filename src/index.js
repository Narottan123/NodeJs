const express=require("express");
const bodyParser=require("body-parser");
const route=require('./routes/route')

const app=express();
const mongoose=require("mongoose")
app.use(bodyParser.json());

mongoose.connect("mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.8.1",{
    useNewUrlParser:true
})
.then(()=>{
    console.log("connection successful");
})
.catch((err)=>{
    console.log(err);
})
app.use('/',route);

app.listen(3000,function(){
    console.log('port 3000')
})