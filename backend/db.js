// Connecting to moongose
const mongoose=require("mongoose");

const mongoURL=process.env.MONGODB_URI

const connecttoMongo=()=>{
    mongoose.connect(mongoURL,()=>{
        console.log("Successfully connected to mongoDB");
    })
}

module.exports=connecttoMongo;