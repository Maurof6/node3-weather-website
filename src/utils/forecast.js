const request = require('request')

const forecast = (lat, lon, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=0d5fe497fb0dff680ad46044906dbd68&query='+lat+','+lon
    
    request({ url, json: true }, (error, {body}={}) => {
        if (error) {
            callback('Unable to conect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location!', undefined)
        } else {
            callback(undefined,
                body.current.weather_descriptions[0] + '. It is currently ' + body.current.temperature + ' degress out. There is a wind speed of ' + body.current.wind_speed + ' kilometers per hour.')
        }
    })
}
module.exports = forecast