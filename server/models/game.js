const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const gameSchema = new Schema({
   players:{
    type: [Schema.Types.ObjectId],
    ref: 'User',
    default: [],
    required: true,
    validate:[arrayLimit, 'More than 2 players in game']
   },
   hasEnded:{
      type: Boolean,
      default: false,
      required: true
   },
   winner:{
      type: Schema.Types.ObjectId,
      ref: 'User'
   }
})

function arrayLimit(val) {
   return val.length > 2;
 }

module.exports = mongoose.model('Game', gameSchema);