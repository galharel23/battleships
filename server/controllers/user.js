const express = require("express");
const mongoose = require("mongoose");
const { rawListeners } = require("../models/user");
const user = require("../models/user");
const User = require("../models/user");

//trigger  a event in a channel with json object

// CREATE
const createUser = async (req, res) => {
  const rank = req.body.rank == null ? 100 : req.body.rank;
  let user = new User({
    _id: new mongoose.Types.ObjectId(),
    name: req.body.name,
    rank: rank,
  });
  try {
    const newUser = await user.save();
    res.status(201).json(newUser);
    console.log("create new user");

    pusher.trigger('channel-name', 'event-name', {
        data: newUser
    });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// READ

const getUserById = async (req, res) => {
  let id = req.params.id;
  try {
    const user = await User.findById(id);
    res.status(200).json(user);
  } catch (err) {
    res.json({ error: err });
  }
};

const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getAllActiveUsers = async (req, res) => {
  try {
    const activeUsers = await User.find({ isOnline: true });
    res.json(activeUsers);
  } catch (err) {
    res.json({ err: err.message });
  }
};

const getAllReadyToPlayUsers = async (req, res) => {
    try {
      const readyUsers = await User.find({ isOnline: true, isDuringGame: false });
      res.json(activeUsers);
    } catch (err) {
      res.json({ err: err.message });
    }
  };

const getTopFiveUsers = async (req, res) => {
  const usersNum = req.query.num == null ? 5 : req.query.num;
  try {
    const topUsers = await User.find().sort("-rank").limit(usersNum);
    res.json(topUsers);
  } catch (err) {
    res.json({ err: err.message });
  }
};

// UPDATE

const setIsUserOnline = async (req, res) => {
  const id = req.params.id;
  const user = await User.findById(id);
  user.isOnline = !user.isOnline;
  user.save((err) => {
    if (err) {
      res.json({ message: err.message });
    } else {
      res.json({ message: "Updated isOnline" });
    }
  });
};

const setIsUserInGame = async (req, res) => {
  const id = req.params.id;
  const user = await User.findById(id);
  user.isDuringGame = true;
  user.save((err) => {
    if (err) {
      res.json({ message: err.message });
    } else {
      res.json({ message: "Updated isOnline" });
    }
  });
};

const setUserGameOver = async (req, res) => {
  const id = req.params.id;
  const winnerId = req.params.winnerId;
  const isWinner = id === winnerId ? true : false;
  const user = await User.findById(id);
  user.rank = isWinner ? user.rank + 10 : user.rank - 10;
  user.isDuringGame = false;
};

// DELETE

const deleteUser = async (req, res) => {
  const id = req.params.id;
  User.findByIdAndRemove(id)
    .exec()
    .then(() =>
      res.status(204).json({
        success: true,
      })
    );
};

module.exports = {
  createUser,
  getAllReadyToPlayUsers, 
  getTopFiveUsers,
  getUserById,
  getAllUsers,
  getAllActiveUsers,
  setIsUserOnline,
  deleteUser,
};
