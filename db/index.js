const Redis = require("ioredis");

const client = new Redis();

const addCity = async (city, weather) => {
    const keys = await client.keys("city-*");
    if (keys.length === 10) {
        const latestValue = await client.get("latest");
        await client.del(latestValue);
    }
    await client.set(`city-${city}`, weather);
    await client.set("latest", `city-${city}`);
};

const getWeathersHistory = async () => {
    const keys = await client.keys("city-*");
    const promises = keys.map(async (key) => {
        return {
            city: key.split("-")[1],
            weather: await client.get(key),
        };
    });

    return await Promise.all(promises);
};

const getWeatherToCity = (city) => client.get(`city-${city}`);

module.exports = {
    addCity,
    getWeathersHistory,
    getWeatherToCity,
};
