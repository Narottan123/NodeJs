const express = require('express');
const { route } = require('express/lib/application');
const router = express.Router();
const myUnderscore = require('underscore')

router.get('/sol2',(req,res)=>{
    let arr=[33,34,35,37,38]
    let n=arr.length+1;
    let total_sum=(n*(arr[0]+arr[n-2])/2)
    let arr_sum=arr.reduce((acc,curr)=>acc+curr)
    let missing_val=total_sum-arr_sum
    res.send({'data':missing_val})
    console.log(missing_val)
    
})



module.exports = router;