const express = require("express");
const router = express.Router();

const URL = require("../models/url"); // ✅ import model

router.get('/', async (req, res) => {
  try {
    const allUrls = await URL.find({});
    return res.render('home', {
      urls: allUrls
    });
  } catch (error) {
    console.error(error);
    return res.status(500).send("Server Error");
  }
});

router.get('/signup',(req, res)=>{
  return res.render("signup");
})

router.get('/login',(req, res)=>{
  return res.render("login");
})
module.exports = router;