const express = require("express");
const { connectMongoDb } = require("./connection");

const userRouter = require("./routes/user");
const { logReqRes } = require("./middleware/index");

const app = express();
const fs = require("fs");
const PORT = 3000;

app.use(express.json());

// connection
connectMongoDb("mongodb://127.0.0.1:27017/youtube-app-1").then(() => {
  console.log("MongoDB conected")
});

// Middleware -Plugin
app.use(express.urlencoded({ extended: false }));

app.use(logReqRes("log.txt"));

app.use("/api/users", userRouter);
app.listen(PORT, () => {
  console.log(`server is started on port ${PORT}`);
});
