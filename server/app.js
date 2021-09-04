const mongoose = require('mongoose');
const dotenv = require('dotenv');
const express = require("express");
const app = express();

// linked dotenv.config.env file with node app 
dotenv.config({path:'./config.env'});
require('./db/conn');

// get port number from dotenv.config.env file 
const port = process.env.PORT;

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