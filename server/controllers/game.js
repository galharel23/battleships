const mongoose = require("mongoose");
const Game = require("../models/game");

// CREATE
const createGame = async (req, res) => {
  const player1Id = req.body.player1Id._id;
  const player2Id = req.body.player2Id._id;

  let game = new Game({
    'players': {
      player1Id,
      player2Id,
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
