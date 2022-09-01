// Connecting to moongose
const mongoose=require("mongoose");

const mongoURL="mongodb://localhost:27017/task-manager";

const connecttoMongo=()=>{
    mongoose.connect(mongoURL,()=>{
        console.log("Successfully connected to mongoDB");
    })
}

module.exports=connecttoMongo;