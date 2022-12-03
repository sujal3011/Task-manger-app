require('dotenv').config()
const express=require("express");
const connecttoMongo=require("./db");
const cors = require('cors');
const passport = require('passport');
const cookieSession = require('cookie-session');
require('./passport.setup')

connecttoMongo();  //Connecting to mongo

const app=express();
const port= process.env.PORT || 3000;

app.use(cors())

app.use(express.json());

app.use(cookieSession({
    maxAge : 24 * 60 * 60 * 1000,
    keys : ['sandip@low']
}))

app.use(passport.initialize())
app.use(passport.session())

app.get('/',(req,res)=>{
    res.send("Hello,Welcome to task manager");
})

const auth=require('./routes/auth')
const lists=require("./routes/lists");
app.use('/auth',auth);
app.use('/lists',lists);


app.listen(port,()=>{
    console.log(`The express app is running on port ${port}`);
})
