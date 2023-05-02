const express=require('express');
const router=express.Router();
const controller=require('../controller/usercontroller')

router.post('/createauthor',controller.createauthor)
router.post('/createbook',controller.createbook);
router.get('/search_by_authorid',controller.search_by_authorid)
router.put('/update_price',controller.update_price)
router.get('/findauthor',controller.findauthor)

module.exports=router;