const mongoose=require('mongoose')
const FacultySchema =new mongoose.Schema({
    fname:String,
    femail:String,
    fpassword:String,
    finstitutename:String,
    finstituteid: Number,
    fdepartment:String,
    fposition:String,

})

const FacultyModel =mongoose.model("faculties",FacultySchema)
module.exports=FacultyModel