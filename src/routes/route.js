const express=require('express')
const router=express.Router();
const controller=require('../controllers/controller.js');

router.post('/authorcreate',controller.authorcreate);
router.post('/publishercreate',controller.publishercreate);
router.post('/bookcreate',controller.bookcreate);
router.get('/bookshow',controller.bookshow);

module.exports=router;