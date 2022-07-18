const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    rank:{
        type: Number,
        min:0,
        default:100
    },
    lastConnection:{
        type: Date,
        default: Date.now
    }
})

const User = mongoose.model('User', userSchema);