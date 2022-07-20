const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    isOnline:{
        type: Boolean,
        default: false,
        required:true
    },
    isDuringGame:{
        type: Boolean,
        default: false,
        required: true
    },
    rank:{
        type: Number,
        min:0,
        default:100,
        required:true,
    },
    lastConnection:{
        type: Date,
        default: Date.now,
        required:true
    },
    gamesHistory:{
        type: [Schema.Types.ObjectId],
        ref: 'Game',
        default:[],
        required:true
    }
})

module.exports = mongoose.model('User', userSchema);