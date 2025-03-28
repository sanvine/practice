const applicationModel = require("../Models/ApplicationModel");

exports.getLogin=async(req,res,next)=>{
    const {email,password}=req.body
    applicationModel.findOne({email:email})
    .then(user=>{
        if(user){
            if(user.password===password){
                res.json("success")
            }else{
                res.json("Incorrect password")
            }
        }else{
            res.json("Incorrect username")
        }
    }
)
}