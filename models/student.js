const mongoose=requie('mongoose');
const studentschema=new mongoose.schema({
    Id:String,
    Name:{
        type:String,
        required:true
    },
    Roll:{
        type:String,
        required:true
    },
    Class:{
        type:String,
        required:true
    },
    Yoj:{
        type:Number,
        required:true
    },
    
})
module.exports=mongoose.models("student",studentschema)