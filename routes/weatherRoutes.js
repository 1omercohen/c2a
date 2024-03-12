const express = require("express");
const {
    getWeather,
    getWeatherHistory,
} = require("./../controllers/weatherConteroller");

const router = express.Router();

router.get("/", getWeather);

router.get("/history", getWeatherHistory);

module.exports = router;
