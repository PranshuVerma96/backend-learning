const express = require("express");
const urlRoute = require('./url');
const {
  handleGenerateNewShortURL,
  handleGetAnalytics,
} = require("./controllers/url");

const router = express.Router();

router.post("/", handleGenerateNewShortURL);
router.get("/analytics/:shortId", handleGetAnalytics);

module.exports = router;
