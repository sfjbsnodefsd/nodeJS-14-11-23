const express = require("express")
const mongoose = require("mongoose")
const app = express()
const PORT=5000
const User = require("./User")
const jwt = require("jsonwebtoken")
app.use(express.json());


mongoose.connect(
    "mongodb://localhost:27017/auth-service",
    {
        useNewUrlParser:true,
        useUnifiedTopology: true
    } 
    // , () => {
    //     console.log("Auth-service DB connected sucessfully");
    // }
)


// to register a user or create a new account
app.post("/auth/reg", async (req,res) => {
    const {email, password, name} = req.body;
    const userExists = await User.findOne({email});
    if(userExists) {
        return res.json({sucess: 0 , message:"User already exists try logging in Instead"})
    } else {
        const newUser = new User({
            name,
            email,
            password
        });
        newUser.save()
        return res.json(newUser);
    }
})
// to login using email and the password 
app.post("/auth/login" , async(req,res) => {
    const {email, password} = req.body;

    const user = await User.findOne({email});
    if(!user) {
        return res.json({sucess : 0, message:"User dose not exists with this email"});
    } else {
        if (password !== user.password) {
            return res.json({sucess:0, message :"Incorrect password"});
        } const payload = {
            email, name: user.name
        };
        jwt.sign(payload, "secret", (err, token) => {
            if(err) console.log(err);
            else {
                return res.json({token:token})
            }
        })
    }
})


app.listen(PORT, () => {
    console.log(`Auth service running at port ${PORT}`);
})