const {json} = require('body-parser')
const User = require('../models/user')
const express = require('express')
const router = express.Router()


// a method to add user
router.post('/adduser', async(req, res) =>{
    try{
        const user = await User.create(req.body);
        res.json(user)
    }
    catch(err){
        res.json(err)
    }
})

router.get('/allusers', async(req, res) =>{
    try{
        const users = await User.find();
        res.json(users)
    }
    catch(err){
        res.json(err)
    }
})

router.delete('/delete/:userId', async(req, res) =>{
    try{
        await User.remove({_id:req.params.userId});
        res.status(200).join({
            message:'User Deleted Successfully'
        })
    }
    catch(err){
        res.json(err)
    }
})

module.exports = router;