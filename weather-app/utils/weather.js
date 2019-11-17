const request = require('request')

const weatherRequest = ({lat,long,placeName}, callback) => {
    const url = "https://api.darksky.net/forecast/83c73a4fbf9b1dab6e6e3ac4a0afd192/" + lat + "," + long + "/"
    request({
        url: url,
        method: 'GET',
        json: true,
        qs: {
            exclude: "minutely,hourly, alerts,flags",
            units: "si",
            lang: "en"
        }
    },
        (error, {body}) => {
            if (error || body.error) {
                const msg = error ? "Network Error occurred" : "Invalid url"
                callback(msg, undefined)
            }
            else {
                weatherResponse = {
                    summary: body.daily.data[0].summary,
                    temperature: body.currently.temperature,
                    precipProbability: body.currently.precipProbability
                }
                callback(undefined, weatherResponse)
            }
        }
    )
}
module.exports = weatherRequest