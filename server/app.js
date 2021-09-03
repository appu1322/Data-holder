const mongoose = require('mongoose');
const dotenv = require('dotenv');
const express = require("express");
const app = express();

// linked dotenv.config.env file with node app 
dotenv.config({path:'./config.env'});

// get url path database from dotenv.config.env file 
const port = process.env.PORT;
const dbUrl = process.env.DATABASE;

mongoose.connect(dbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() =>{
    console.log("Connection successful...");
}).catch((e) => console.log("connection error! " + e));

const middleware = (req, res, next) =>{
    console.log("middleware works fine");
    next();
}


app.get("/", (req, res) =>{
    res.send("hiii");
})

app.get("/about", middleware, (req, res) =>{
    console.log("About page works fine");
    res.send("about");
})

app.listen(port, () => {
    console.log(`Server is strting at port ${port}`);
})