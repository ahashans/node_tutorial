const request = require('request')
const geocode = (location, callback) => {
    const mapURL = "https://api.mapbox.com/geocoding/v5/mapbox.places/" + location + ".json?access_token=pk.eyJ1IjoiYWhhc2hhbnMiLCJhIjoiY2p3OGEwZW1rMXVwMDQ0bm4zY295bTN1ZiJ9.CSfjMShNnsFDgRSBG1n2pQ"
    request({
        url: mapURL,
        method: "GET",
        json: true,
        qs: {
            limit: "1"
        }
    },
        (error, {body}) => {
            if (error || body.message || body.features.length === 0) {
                const msg = error ? "Unable to connect" : "Invalid input"
                callback(msg, undefined)
            }
            else {
                const long = body.features[0].center[0]
                const lat = body.features[0].center[1]
                const placeName = body.features[0].place_name
                const coords = {
                    lat,
                    long,
                    placeName: placeName
                }
                callback(undefined, coords)
            }
        
        }
    )
}
module.exports = geocode