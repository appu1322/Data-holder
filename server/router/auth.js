const express = require("express");
const router = express.Router();
const User = require('../model/userSchema');

router.get("/", (req, res) =>{
    res.send("Hi there, i am rourter");
})

router.post("/register", (req, res) =>{
    const {name, email, phone, work, password, cpassword} = req.body;

    if(!name || !email || !phone || !work || !password || !cpassword){
        res.status(422).send("Fill data properly!");
    }

    User.findOne({email}).then((userExit) =>{
        if(userExit)
            return res.status(422).json({error:"Email already exist!"});
        else{
            const user = new User({name, email, phone, work, password, cpassword});

            user.save().then(() =>{
                return res.status(201).json({message:"You have registered successfully.."});
            }).catch((e) => res.status(500).json({error:"Registeration failed!"}));
        }
            
    }).catch((e) => res.status(500).json({error:"failed to registered!"}));

})

module.exports = router;