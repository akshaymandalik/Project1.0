const express = require('express');
const app = express();
require('dotenv').config();
const userSignup = require('./src/routes/userRoute');
const port = process.env.PORT;

app.get("/",(req,res)=>{

        res.send('Server is up');
});
app.use(express.json())

app.use("/",userSignup);

app.listen(port,()=>{
    console.log(`Server is Running on Port ${port}`);
    
});