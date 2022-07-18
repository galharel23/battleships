const mongoose = require("mongoose");
const User = require("../models/user");

const createUser = async (req, res) => {
  let user = new User({
    name: req.body.name,
  });
  try {
    const newUser = await user.save();
    res.status(201).json(newUser);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const getUserById = async (req, res) => {
  let id = req.params.id;
  try {
    const user = await User.findById(id);
    res.status(200).json(user);
  } catch (err) {
    res.json({ error: err });
  }
};

// const setUserReady = async (req,res) =>{
//     await User.updateOne({

//     })
// }

const getAllUsers = async (req, res) => {
  User.find()
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      console.log(err);
    });
};

// const getAllActiveUsers = async (req,res) =>{
//     User.find().where()
// }

module.exports = {
  createUser,
  getUserById,
  getAllUsers,
};
