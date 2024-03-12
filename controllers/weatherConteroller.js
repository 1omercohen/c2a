import catchAsync from "../utils/catchAsync";

const getWeather = catchAsync(async (req, res, next) => {
    const { cities } = req.body || req.params;
    const weathers = cities.split(",").map((city) => {
        return {
            city,
            wheather: Math.floor(Math.random() * (30 - -10 + 1)) + -10,
        };
    });
    return res.status(200).json({ weathers });
});

const getWeatherHistory = catchAsync(async (req, res, next) => {});

module.exports = {
    getWeather,
    getWeatherHistory,
};
