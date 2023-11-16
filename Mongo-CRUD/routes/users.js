const { json } = require("body-parser");
const User = require("../models/user");
const express = require("express");
const router = express.Router();

// a method to add a user
router.post("/adduser", async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.json(user);
  } catch (err) {
    res.json(err);
  }
});

// to get all the users

router.get("/allusers", async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.json(err);
  }
});

// delete a user
router.delete("/delete/:userId", async (req, res) => {
  try {
    await User.remove({_id:req.params.userID});
    res.status(200).json({
      message: "User deleted successfully!",
    });
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
