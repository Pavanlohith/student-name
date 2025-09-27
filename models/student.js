const mongoose=require('mongoose');
const { v4: uuidv4 } = require('uuid'); 

const studentschema=new mongoose.Schema({
    Id:String,
    Name:{
        type:String,
        required:true
    },
    Roll:{
        type:String,
        required:true
    },
    Cls:{
        type:String,
        required:true
    },
    Yoj:{
        type:Number,
        required:true
    },
    
})
module.exports=mongoose.model("student",studentschema)