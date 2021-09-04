const mongoose = require('mongoose');

const dbUrl = process.env.DATABASE;

mongoose.connect(dbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() =>{
    console.log("Connection successful...");
}).catch((e) => console.log("connection error! " + e));