require("dotenv").config();
const express = require("express");
const session = require("express-session");
const MongoDBStore = require("connect-mongodb-session")(session);
const mongoose = require("mongoose");
const cors = require("cors");
const routes = require("./routes");
const app = express();
const port = process.env.SERVER_PORT || 5000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:3000",
    methods: ["POST", "PUT", "GET", "OPTIONS", "HEAD"],
    credentials: true,
  })
);
const store = new MongoDBStore({
  uri: process.env.MONGODB_URL,
  collection: "mySessions",
});

app.use(
  session({
    // secret: process.env.SECRET_KEY,
    name: "clinic",
    secret: "secretKey",
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24 * 7, // 1 week
    },
    store: store,
  })
);
app.use(routes);

mongoose.connect(process.env.MONGODB_URL);
mongoose.connection.on("error", (err) =>
  console.log("[error]", "Error connecting to database:", err.messages)
);
mongoose.connection.once("open", () => {
  console.log("[info]", "Connected to database");
  app.listen(port, () => console.log("Server is running on port", port));
});
