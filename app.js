const express=require('express');
const app=express();
const connectDB=require('./db/db.js');
const student=require('./models/student.js')
connectDB();
app.use(express.json())
app.post("/api/student")


app.listen(9000,()=>{
    console.log("server connected")
})