const mongoose = require('mongoose')
const Scheme = mongoose.Schema;

const userScheme = new Scheme({
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

const User = mongoose.model('User', userScheme);