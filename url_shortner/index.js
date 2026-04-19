const express = require("express");
const path = require("path");
const {restrictToLoggedinUserOnly}= require('./middleware/auth');
const cookieParser = require('cookie-parser');
const urlRoute = require("./routes/user");
const { connectToMongoDB } = require("./connect");
const staticRoute = require('./routes/staticRouter');
const userRoute = require('./routes/user')
const URL = require("./models/url");
const app = express();
const PORT = 8000;

// connection to mongodb
connectToMongoDB("mongodb://localhost:27017/Url-short").then(() =>
  console.log("mongodb connected"),
);

app.set("views", path.resolve("./views"));
app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({extended : false}))
app.use(cookieParser());


app.use("/url", restrictToLoggedinUserOnly ,urlRoute);
app.use("/user" , userRoute);




app.get("/url/:shortId", async (req, res) => {
  const shortId = req.params.shortId;
  const entry = await URL.findOneAndUpdate(
    {
      shortId,
    },
    {
      $push: {
        visitHistory: {
          timestamp: Date.now(),
        },
      },
    },
  );
  if(!entry) return res.status(404).send("url not found")
  res.redirect(entry.redirectURL);
});
app.use("/" ,staticRoute)

app.listen(PORT, () => console.log(`server started at port  ${PORT}`));
