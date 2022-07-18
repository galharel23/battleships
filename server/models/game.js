const mongoose = require('mongoose')
const Scheme = mongoose.Schema;

const gameScheme = new Scheme({
   name:{
    type: String
   }
})

const Game = mongoose.model('Game', gameScheme);