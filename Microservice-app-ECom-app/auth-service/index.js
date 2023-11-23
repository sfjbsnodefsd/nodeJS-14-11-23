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

app.listen(PORT, () => {
    console.log(`Auth service running at port ${PORT}`);
})