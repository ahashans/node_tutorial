const geocode = require('./utils/geocode')
const weatherRequest = require('./utils/weather')

if (!process.argv[2]) {
    console.log("Please enter a location!")
}
else {
    geocode(process.argv[2], (error, response) => {
        if (error) {
            console.log(error);
        }
        else {
            console.log("Getting weather data for: " + response.placeName + " (" + response.lat + ", " + response.long + ")")
            weatherRequest(response, (error, response) => {
                if (error) {
                    console.log(error);
                }
                else {
                    const { summary, temperature, precipProbability } = response
                    console.log(summary+" It is currently "+temperature+" degrees out. There is a "+precipProbability+"% chance of rain.")
                }

            })
        }

    })
}
