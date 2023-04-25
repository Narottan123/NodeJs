const express = require('express');
const { route } = require('express/lib/application');
const router = express.Router();
const myUnderscore = require('underscore')

/*ASSIGNMENT:
you will be given an array of persons ( i.e an array of objects )..each person will have  a {name: String , age: Number, votingStatus: true/false(Boolean)}
take input in query param as votingAge..and for all the people above that age, change votingStatus as true
also return an array consisting of only the person that can vote

WRITE A POST API TO THE ABOVE


take this as sample for array of persons:*/
let persons= [
   {
   name: "PK",
   age: 10,
   votingStatus: false
},
{
   name: "SK",
   age: 20,
   votingStatus: false
},
{
   name: "AA",
   age: 70,
   votingStatus: false
},
{
   name: "SC",
   age: 5,
   votingStatus: false
},
{
   name: "HO",
   age: 40,
   votingStatus: false
}
]






router.get('/sol',(req,res)=>{
    let votingage=req.query.votingAge;
    let result=persons.filter(x=>x.age>=votingage);
    result.forEach(x=>x.votingStatus=true);
    res.send(result);
    
    
})



module.exports = router;