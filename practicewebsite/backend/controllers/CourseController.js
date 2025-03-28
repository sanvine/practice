const courseModel = require("../Models/Coursemodel")

exports.getCourses=async(req,res,next)=>{
    const courses=await courseModel.find({}) 
    res.json({
        success:true,
        courses
    })
}

exports.getSingleCourses=(req,res,next)=>{
    res.json({
        success:true,
        Message:"Single course working"
    })
}