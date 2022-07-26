const mongoose = require("mongoose");
const express = require("express");
const session = require("express-session");
const MongoDBSession = require("connect-mongodb-session")(session);
const connectDB = require("./db/connect");
const path = require("path");
const morgan = require("morgan");
require("dotenv").config();

const PORT = process.env.PORT || 3001;

// require app routes
const userRoutes = require("./routes/user");
const gameRoutes = require("./routes/game");

// require db models
const User = require("./models/user");
const Game = require("./models/game");
const { MongoRuntimeError } = require("mongodb");
const bodyParser = require("body-parser");

const app = express();
const store = new MongoDBSession({
  uri: process.env.MONGO_URL,
  collection: "users",
});

const Pusher = require("pusher");
const pusher = new Pusher({
  appId: "1442546",
  key: "d43b343d3e24a760e4be",
  secret: "88dda8eeda12fe9481d2",
  cluster: "ap2",
  useTLS: true
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.use(express.static("public"));
app.use(morgan("tiny"));
app.use(express.json());

// using app routes
app.use("/api/game", gameRoutes);
app.use("/api/user", userRoutes);

app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
});

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../client/public", "index.html"));
});

// app.listen(PORT, () => {
//   console.log(`Server listening on ${PORT}`);
// });


const runApp = async () => {
  try {
    mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true });
    const db = mongoose.connection;
    db.once("open", () => {
      console.log(`db is opened!`);
      app.listen(PORT, () => {
        console.log(`node server running on port ${PORT}`);
      });
    });
  } catch (error) {
    console.log(error);
  }
};

runApp();
