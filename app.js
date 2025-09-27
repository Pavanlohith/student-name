const express=require('express');
const { v4: uuidv4 } = require('uuid'); 
const app=express();
const connectDB=require('./db/db.js');
const student=require('./models/student.js')
connectDB();
app.use(express.json())
app.post("/api/student",async (req,res)=>{
    try{
    const {name,roll,cls,yoj}=req.body;
    const table=new student({
        "Id":uuidv4(),
        "Name":name,
        "Roll":roll,
        "Cls":cls,
        "Yoj":yoj,

    })
    const info= await table.save();
    res.send(info)
    }
    catch(e)
    {
        res.send(e);
    }

})
app.get("/api/student",async(req,res)=>{
    const resp=await student.find();
    res.send(resp)
})
app.get("/api/student/:id",async(req,res)=>{
    const id=req.params.id;
    const resp=await student.findOne({"Id":id});
    res.send(resp)
})
app.patch("/api/student/:id",async(req,res)=>{
    const id=req.params.id;
    const resp=await student.findOneAndUpdate({"Id":id},req.body)
    res.send(resp)
})
app.delete("/api/student/:id",async(req,res)=>{
        const id=req.params.id;
        const resp=await student.findOneAndDelete({"Id":id})
        res.send(resp)
})
app.listen(7000,()=>{
    console.log("server connected")
})