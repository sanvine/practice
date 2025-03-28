const mongoose=require('mongoose')

const courseSchema=new mongoose.Schema(
    {
        Name:String,
        Description:String,
        Rating:String,
        images:String
    }
)

const courseModel=mongoose.model('course',courseSchema)
module.exports=courseModel