const express=require('express');
const router=express.Router();
const controller=require('../controller/controller1')

router.post('/user',controller.createuser)
router.post('/login',controller.loginuser)
router.get('/user/:userid',controller.verifyToken,controller.usercheck)
router.put('/user/:userid',controller.verifyToken,controller.userupdate)
router.delete('/user/:userid',controller.verifyToken,controller.userdelete)


module.exports=router;