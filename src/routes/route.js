const express = require('express');
const { route } = require('express/lib/application');
const router = express.Router();
const myUnderscore = require('underscore')

router.get('/sol',(req,res)=>{
    let arr=[1,2,3,5,6,7]
    let n=arr.length+1
    let total_sum=((n*(n+1))/2)
    let arr_sum=arr.reduce((acc,curr)=>acc+curr);
    let missing_val=total_sum-arr_sum
    res.send({'data':missing_val})
    console.log(missing_val)
})



module.exports = router;