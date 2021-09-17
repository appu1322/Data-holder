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
        res.status(422).send("Fill data properly!");
    }

    // User.findOne({email}).then((userExit) =>{
    //     if(userExit)
    //         return res.status(422).json({error:"Email already exist!"});
    //     else{
    //         const user = new User({name, email, phone, work, password, cpassword});

    //         user.save().then(() =>{
    //             return res.status(201).json({message:"You have registered successfully.."});
    //         }).catch((e) => res.status(500).json({error:"Registeration failed!"}));
    //     }
            
    // }).catch((e) => res.status(500).json({error:"failed to registered!"}));

    try {

        const userExist = await User.findOne({email});

        if(userExist){
            return res.status(422).json({error:"Email already exist!"});
        }

        const userResponse = new User({name, email, phone, work, password, cpassword});

        await userResponse.save();

        return res.status(201).json({message:"You have registered successfully.."});

    } catch (error) {
        res.status(500).json({error:"failed to registered!"});
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
                res.json({message: "Login successful..."});
            }
        }

    } catch (error) {
        console.log(error);
        res.status(500).json({error:"Internal server error!"});
    }
})

module.exports = router;