const mongoose=require('mongoose');
const { v4: uuidv4 } = require('uuid'); 
const attandanceschema=new mongoose.Schema({
    attid:String,
    stid:String,
    "Date":{
        type:Date,
        required:true
    },
    "Status":{
        type:String,
        required:true
    }
})
module.exports = mongoose.model("attandance", attandanceschema);