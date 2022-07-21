const mongoose = require("mongoose");
const Game = require("../models/game");
const User = require('../models/user')
const userCtrl = require ('./user')

// CREATE
const createGame = async (req, res) => {
  const player2Id = req.body.player2Id;
  const player2 = User.findById(player2Id)
  console.log(player2)

  let game = new Game({
    'players': {
        player2Id
    },
  });
  try {
    const newGame = await game.save();
    res.status(201).json(newGame);
    console.log("create new gajme");
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// READ

const getAllGames = async (req, res) => {
  Game.find().then((result) => {
    res.json(result).catch((err) => {
      console.log(err);
    });
  });
};

const getGameById = async (req, res) => {
  let id = req.params.id;
  try {
    const game = await Game.findById(id);
    res.json(game);
  } catch (err) {
    res.json({ error: err });
  }
};

module.exports = {
  createGame,
  getAllGames,
  getGameById,
};
