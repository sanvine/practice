const express=require('express')
const { getApplication } = require('../controllers/Application')
const router=express.Router()

router.route('/applicationpath').post(getApplication)


module.exports=router