const express=require('express');
const { v4: uuidv4 } = require('uuid'); 
const app=express();
const connectDB=require('./db/db.js');
const student=require('./models/student.js')
const attandance=require('./models/attandance.js')
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
 app.get("/api/student/by/:cls",async(req,res)=>{
     const cls=req.params.cls;
     const resp=await student.find({Cls:cls});
     res.send(resp)

})
app.get("/api/student/:id",async(req,res)=>{
    const id=req.params.id;
    const x=await student.find({Roll:id});
    res.send(x)
})


//attandance part
app.post("/api/attandance",async(req,res)=>{
    try{
    const {stid,date,status}=req.body;
    const attandancetable=new attandance({
        stid,
        attid:uuidv4(),
        "Date":date,
        "Status":status
    })
    const info=await attandancetable.save();
    res.send(info)
}
catch(e){
    res.send(e)
}
})
app.get("/api/attandance",async(req,res)=>{
    const info=await attandance.find();
    res.send(info)

})
app.get("/api/student/:id/attandance",async(req,res)=>{
    const id=req.params.id;
    const x=await attandance.findOne({"stid":id})
    res.send(x);
})
app.patch("api/attandance/:id",async(req,res)=>{
    const id=req.params.id;
    const x=await attandance.findOneAndUpdate({"stid":id},req.body)
    res.send(x)
})
app.delete("/api/attandance/:id",async(req,res)=>{
    const id=req.params.id;
    const x=await attandance.findOneAndDelete({"stid":id})
    res.send(x)
})
app.listen(7000,()=>{
    console.log("server connected")
})