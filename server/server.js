const express = require("express");
const mongoose = require('mongoose');
const connectDB = require("./db/connect");

// require("dotenv").config();


const PORT = process.env.PORT || 3001;

const User = require('./models/user');
const Game = require('./models/game');

const app = express();

app.get("/api", (req, res) => {
    res.json({ message: "Hello from server!" });
  });

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});