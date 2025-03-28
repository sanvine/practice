const express=require('express')
const { getCourses, getSingleCourses } = require('../controllers/CourseController')
const router=express.Router()

router.route('/courses').get(getCourses)
router.route('/courses/:id').get(getSingleCourses)

module.exports=router