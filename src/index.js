const express=require("express");
const bodyParser=require("body-parser")
const route=require('./routes/route')
const mongoose=require('mongoose')
const app=express();
app.use(bodyParser.json());
//mongoose.connect('mongodb://localhost:27017/mongo_session3')
mongoose.connect("mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.8.1",{
    useNewUrlParser:true
})
/*mongoose.connect('mongodb://localhost:27017/mongo_session3', {
    connectTimeoutMS: 30000
});*/

app.use('/',route);
app.listen(3000,()=>{
    console.log("port 3000")
})