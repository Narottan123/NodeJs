const express = require('express');
const { route } = require('express/lib/application');
const router = express.Router();
const commonFile = require('./common')
const myUnderscore = require('underscore')

/*1.Create an API for GET /movies that returns a list of movies. Define an array of 
movies in your code and return the value in response.*/

const movies = ['Rang de basanti', 'The shining', 'Lord of the rings', 'Batman begins'];
router.get('/movies', function (req, res) {
    res.send(movies)
    console.log('hello');
})

/*2.Create an API GET / movies /: indexNumber(For example GET / movies / 1 is a valid 
request and it should return the movie in your array at index 1). You can define an 
array of movies again in your api
3.Handle a scenario in problem 2 where if the index is greater than the valid maximum 
value or smaller that the valid minimum value, a message is returned that tells the 
user to use a valid index in an error message.*/


router.get('/movies/:indexnumber', function (req, res) {
    let index = req.params.indexnumber;
    console.log(index)
    if (index < 0 || index >= movies.length) {
        res.status(400).send('Invalid index number')
    }
    else {
        res.send(movies[index]);
    }
})

/*4.Write another api called GET / films.Instead of an array of strings define an array 
of movie objects this time.Each movie object should have attributes - id and name*/

/*5.Write api GET / films /:filmId where filmId is the value received in request path 
params.Use this value to return a movie object with this id.In case there is no such 
movie present in the array, return a suitable message in the response body.Example 
for a request GET / films / 3 should return the movie object
{
 “id”: 3,
 “name”: “Rang de Basanti”
}
Similarly for a request GET / films / 9 the response can be something like - 
‘No movie exists with this id’*/

const moviesobj = [
    {
        'id': 1,
        'name': 'The Shining',
    },
    {
        'id': 2,
        'name': 'Incendies'
    },
    {
        'id': 3,
        'name': 'Rang de Basanti'
    },
    {
        'id': 4,
        'name': 'Finding Nemo'
    }
]
router.get('/flims', function (req, res) {
    res.send(moviesobj);
})
router.get('/flims/:flimid', function (req, res) {
    let flimindex = parseInt(req.params.flimid);
    let result = moviesobj.find(x => x.id === flimindex)
    if (result) {
        res.status(200).send(result)
    }
    else {
        res.status(404).send("No movie exist with this id")
    }

})




module.exports = router;