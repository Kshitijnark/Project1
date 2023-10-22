const mongoose=require('mongoose')
const StudentSchema =new mongoose.Schema({
    name:String,
    email:String,
    password:String,
    birthdate:Date,
    institutename:String,
    instituteid: Number,
    addrtype:String,
})

const StudentModel =mongoose.model("LearnSpace",StudentSchema)
module.exports=StudentModel