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
router.delete("/delete/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findByIdAndDelete(id);
    if (!user) {
      return res
        .status(404)
        .json({ message: `cannot find any user with the id ${id}` });
    }
    res.status(200).json(user);

    // await User.remove({_id:req.params.userID});
    // res.status(200).json({
    //   message: "User deleted successfully!",
    // });
  } catch (err) {
    console.log(err);
  }
});

// write a get method with pathe /finduser/id and use the method findById(id)

router.get("/finduser/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);
    res.status(200).json(user);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err.message });
  }
});

// update a user

router.put("/updateuser/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findByIdAndUpdate(id, req.body);
    if (!user) {
      return res
        .status(404)
        .json({ message: `cannot find any user with the ID ${id}` });
    }
    const updatedUser = await User.findById(id);
    res.status(200).json(updatedUser);
  } catch (error) {
    console.log();
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
