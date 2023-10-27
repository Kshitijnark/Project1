const express=require("express");
const mongoose=require('mongoose')
const cors=require("cors")
const StudentModel=require('./models/Students');
const FacultyModel = require("./models/Faculties");
const app=express()
app.use(express.json())
app.use(cors())
// mongoose.connect("mongodb://127.0.0.1:27017/LearnSpace")
const dbUrl="mongodb+srv://kshitij:10032004@cluster0.drljcil.mongodb.net/?retryWrites=true&w=majority/LearnSpace";
const connectionParam={
    useNewUrlParser:true,
    useUnifiedTopology:true,
}
mongoose.connect(dbUrl,connectionParam)
.then(()=>{
    console.info("Connected to the DB")
})
.catch((e)=>{
    console.log("Error:",e);
});
app.post('/login',(req,res)=>{
    const{email,password}=req.body;
StudentModel.findOne({email:email})
.then(user=>{
    if(user){
            if(user.password===password){
                res.json("Success")
            }
            else{
                res.json("the password is incorrect")
            }
    }   
    else{res.json("No record")}
})
        })
app.post('/ssignup',(req,res)=>{
        StudentModel.create(req.body)
        .then(students=>res.json(students))
        .catch(err=>res.json(err))
})
app.post('/fsignup',(req,res)=>{
    FacultyModel.create(req.body)
    .then(faculties=>res.json(faculties))
    .catch(err=>res.json(err))
})
app.listen(3001,()=>{
    console.log("Server is Running");
})