const {json} = require("body-parser")
const User = require("../models/user")
const express = require("express")
const router =  express.Router();


// a method to add a user
router.post("/adduser", async(req,res) => {
    try {
        const user = await User.create(req.body);
        res.json(user)
    } catch (err) {
        res.json(err);
    }
}) 


module.exports = router;