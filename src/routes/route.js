const express = require('express');
const { route } = require('express/lib/application');
const router = express.Router();
const myUnderscore = require('underscore')

//Write a POST /players api that creates a new player ( i.e. that saves a player’s 
//details and doesn’t allow saving the data of a player with a name that already 
//exists in the data)

let players =
    [
        {
            "name": "manish",
            "dob": "1/1/1995",
            "gender": "male",
            "city": "jalandhar",
            "sports": [
                "swimming"
            ]
        },
        {
            "name": "gopal",
            "dob": "1/09/1995",
            "gender": "male",
            "city": "delhi",
            "sports": [
                "soccer"
            ],
        },
        {
            "name": "lokesh",
            "dob": "1/1/1990",
            "gender": "male",
            "city": "mumbai",
            "sports": [
                "soccer"
            ],
        },
    ]


router.post('/players', function (req, res) {


    //LOGIC WILL COME HERE
    //res.send({'object':players})
    //console.log(req.body);
    let obj=req.body;
    let check_exist=players.find(x=>x.name==obj.name)
    if(check_exist){
        res.status(400).send({ error: "Player with that name already exists",data:players });
          
        
    }
    else{
        players.push(obj)
        res.send(players)
    }
    
    //res.send({ data: players, status: true })
})





module.exports = router;