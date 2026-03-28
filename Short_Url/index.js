const express = require("express");
const urlRoute = require("./routes/url");
const { connectToMongoDB } = require("./connect");
const URL = require('./models/url')
const staticRouter = require('./routes/staticRuter')
const path = require('path')
const app = express();
const PORT = 3000;

app.use(express.json());

app.set("view engine ", "ejs");
app.set("views" , path.resolve("./views"))


app.use('/',staticRouter)

connectToMongoDB("mongodb://localhost:27017/short-url")
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log("Connection error:", err));

app.post("/url", urlRoute);
app.get('/:shortID' ,async (req, res) => {
  const shortID = req.params.shortId; 
 const entry =  await URL.findOneAndUpdate(
    {
    shortId : shortID,
  },
  {
    
    $push :{
    visitHistory : {
      timestamp : Date.now()
    }
  },
}
  );
  // res.redirect(entry.redirectURL);
});

app.listen(PORT, () => {
  console.log(`Server is started on port ${PORT}`);
});