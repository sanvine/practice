const express=require('express')
const { getLogin } = require('../controllers/loginn')
const router=express.Router()

router.route('/login').post(getLogin)


module.exports=router