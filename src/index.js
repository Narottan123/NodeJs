const express=require("express")
const bodyParser=require("body-parser")
const mongoose=require("mongoose")
const route=require('./routes/route')
const app=express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded())

try{
    mongoose.connect("mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.8.1",{
    useNewUrlParser:true
    })
    console.log('connection successful')
}
catch(err){
    console.log(err)
}

app.use('/',route)

app.listen(3000,()=>{
    console.log("port 3000")
})