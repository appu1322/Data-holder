const express = require("express");
const router = express.Router();
const User = require('../model/userSchema');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

router.get("/", (req, res) =>{
    res.send("Hi there, i am rourter");
})

router.post("/register", async(req, res) =>{
    const {name, email, phone, work, password, cpassword} = req.body;

    if(!name || !email || !phone || !work || !password || !cpassword){
        res.status(422).json({status: 422, error:"Fill data properly!"});
    }

    try {

        const userExist = await User.findOne({email});
        console.log(userExist);

        if(userExist){
            return res.status(422).json({status: 422, error:"Email already exist!"});
        }

        const userResponse = new User({name, email, phone, work, password, cpassword});

        await userResponse.save();

        return res.status(201).json({status: 201, message:"You have registered successfully.."});

    } catch (error) {
        res.status(500).json({status: 500, error:"failed to registered!"});
    }

})

router.post("/signin", async(req, res) =>{
    const {email, password} = req.body;
    if(!email || !password)
        res.status(422).send("Fill data properly!");

    try {

        const userExist = await User.findOne({email});
        
        if(!userExist){
            res.status(400).json({error:"Invalid credentials!"});
        }else{
            const isMatch = await bcrypt.compare(password, userExist.password);
            if(!isMatch){
                res.status(400).json({error:"Invalid credentials!"});
            }else{
                const token = await userExist.generateAuthToken();
                const result = await User.findByIdAndUpdate({_id:userExist._id}, {$set:{tokens:{token:token}}});
                await result.save();
                res.cookie('jwtoken', token, {
                    expires:new Date(Date.now() + 25892000000),
                    httpOnly:true
                });
                res.json({message: "Login successful..."});
            }
        }

    } catch (error) {
        console.log(error);
        res.status(500).json({error:"Internal server error!"});
    }
})

module.exports = router;