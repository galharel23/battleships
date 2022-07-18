const express = require("express");
const mongoose = require("mongoose");
const connectDB = require("./db/connect");

const PORT = process.env.PORT || 3001;

// require app routes
const userRoutes = require("./routes/user");
const gameRoutes = require("./routes/game");

// require db models
const User = require("./models/user");
const Game = require("./models/game");
const { MongoRuntimeError } = require("mongodb");

const app = express();

// using app routes
app.use("/game", gameRoutes);
app.use("/user", userRoutes);

app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
});

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../client/build", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

// const runApp = async () => {
//   try {
//     mongoose.connect(process.env.MONGO_URL);

//     const db = mongoose.connection;

//     db.once("open", () => {
//       console.log(`db is opened!`);
//       app.listen(PORT, () => {
//         console.log(`node server running on port ${PORT}`);
//       });
//     });
//   } 
//   catch (error) {
//     console.log(error)
//   }
// };

// runApp();