const request = require('request')

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+ encodeURIComponent(address) +'.json?access_token=pk.eyJ1Ijoic2lyYXJndWVyIiwiYSI6ImNrYTh2ZDI4bTAzcHMyeGpwY3Bld2pxdTcifQ.naU59XzxM19J_C4bMNNwoA&limit=1'

    request({ url, json: true }, (error, {body}={}) => {
        if (error) {
            callback('Unable to conect to coordinate service!', undefined)
        } else if (body.features.length === 0) {
            callback('Unable to find location. Try another search', undefined)
        } else {
            callback(undefined, {
                latitude: body.features[0].center[1],
                longitude: body.features[0].center[0],
                location: body.features[0].place_name
            })
        }
    })
}
module.exports = geocode