const express=require("express");
const app=express();

//2010-08-19 14:00:00 , 123.459.898.734 , /createUser
const middleware=(req,res,next)=>{
     let curr_date=new Date();
     let datetime=curr_date.getFullYear()+"-"
                  +(curr_date.getMonth()+1)+"-"
                  +curr_date.getDay()+" "
                  +curr_date.getHours()+":"
                  +curr_date.getMinutes()+":"
                  +curr_date.getSeconds()
    let ip=req.ip;
    let url=req.url
    console.log(`${datetime} ${ip} ${url}`)
    next();
}
app.use(middleware)

app.get('/usercreate',(req,res)=>{
    res.send("user created successfully");
})
app.get('/userdetails',(req,res)=>{
    res.send('please check the details')
})
app.get('/updateuser',(req,res)=>{
    res.send('please update the details');
})

app.listen(3000,()=>{
    console.log('port 3000')
})