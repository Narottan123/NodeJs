const express = require('express');
const { route } = require('express/lib/application');
const router = express.Router();
const logger=require('../logger/logger.js');
const util=require('../util/helper.js')
const validator=require('../validator/formattor.js');
const _=require("lodash")

router.get('/test-me', function (req, res) {
    /***********problem1*****************/
    logger.welcome("Narottam Sarkar");
    /***********problem2 *************/
    util.presentdate()
    util.currentmonth()
    util.getbatchinfo('technetium','W303','node js module')
    /***********problem3****************/
    validator.totrim(' functionUp ')
    validator.touppercase('functionup');
    validator.tolowercase('FUNCTIONUP');
    res.send("hello");

    /********problem4 *******************************/
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    let a=_.chunk(months,4)
    console.log(a);

    /********problem5 ******************************/
    let odd=_.range(1,20,2)
    let result=_.tail(odd)
    console.log(result)

    /**********problem6 *************************/
    let arr1=[1,2,3]
    let arr2=[1,2,3]
    let arr3=[1,2,3]
    let arr4=[1,2,3]
    let arr5=[1,2,3]
    let unique=_.union(arr1,arr2,arr3,arr4,arr5)
    console.log(unique)

    /***********problem7 ************************/

    let array= [['horror','The Shining'],['drama','Titanic'],['thriller','Shutter Island'],['fantasy','Pans Labyrinth']]
    let object_keyvalue=_.fromPairs(array)
    console.log(object_keyvalue)



});



module.exports = router;