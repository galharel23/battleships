const mongoose = require("mongoose");
const Game = require("../models/game");

const getAllGames = async (req,res)=>{
    Game.find().then((result)=>{
        res.json(result)
        .catch((err)=>{
            console.log(err)
        })
    })
};

const getGameById = async (req,res)=>{
    let id = req.params.id;
    try{
        const game = await Game.findById(id)
        res.json(game)
    }
    catch(err){
        res.json({error:err})
    }
};

module.exports = {
getAllGames,
getGameById
}
