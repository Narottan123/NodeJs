//import express module
const express = require("express")
//import body paarser module
const bodyParser = require("body-parser")
//import custom route
const route = require("./routes/route.js")
//import mongoose library using destructuring
const { default: mongoose } = require("mongoose")
//create instance of express app
const App = express();
///to handel json and urlencoded data from req.body
App.use(bodyParser.json());
App.use(bodyParser.urlencoded());
mongoose.connect("mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.8.1",{
    useNewUrlParser:true
})
.then(()=>console.log("mongo db is connected"))
.catch(err=>console.log(err))

App.use("/",route)
App.listen(process.env.PORT||3000,function(){
    console.log("express app running on port"+(process.env.PORT||3000))
})