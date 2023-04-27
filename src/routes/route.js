const express=require("express")
const router=express.Router();
const usermodel=require("../models/usermodel")
const usercontroller=require("../controller/usercontroller")

router.post('/createbook',usercontroller.createbook)
router.get('/bookdetails',usercontroller.bookdetails)

module.exports=router;