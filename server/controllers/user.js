const mongoose = require('mongoose')

const User = require('../models/user')

const createUser = async(req,res) =>{
    let user = new User({
        name:req.body.name
    })
    await user.save()

    res.json(user);
    };

const getUserById = async (req,res) =>{
    let id = req.params.id
    try{
        const user = await User.findById(id)
        res.json(user)
    }
    catch(err){
        res.json({error:err})
    }
};

const setUserReady = async (req,res) =>{
    await User.updateOne({
        
    })
}

module.exports = {
    createUser,
    getUserById
}