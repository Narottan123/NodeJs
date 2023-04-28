const express=require("express")
const router=express.Router();
const usermodel=require("../models/usermodel")
const usercontroller=require("../controller/usercontroller")

router.post('/createBook',usercontroller.createBook)
router.get('/bookList',usercontroller.bookList)
router.post('/getBooksInYear',usercontroller.getBooksInYear)
/*router.get('/getParticularBooks',usercontroller.getParticularBooks)
router.get('/getXINRBooks',usercontroller.getXINRBooks)
router.get('/getRandomBooks',usercontroller.getRandomBooks)*/

module.exports=router;