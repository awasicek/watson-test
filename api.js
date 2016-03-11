var express = require('express')
var api = express.Router()
var request = require('request')

//*******SAMPLE API ROUTE*************//
// //show 1 random image
// api.get('/giphy/random', function(req, res){
//   var giphyUrl = 'http://api.giphy.com/v1/gifs/search?q=random+gif&api_key=dc6zaTOxFJmzC'
//   function getRandomInt(min, max) {
//    return Math.floor(Math.random() * (max - min)) + min;
//   }
//   randomGif = getRandomInt(0, 24)
//   console.log("Request received, generated random number: " + randomGif)
//   request({url: giphyUrl, json: true}, function(error, response, body){
//     console.log("Sending...")
//     res.send('<img src="' + body.data[randomGif].images.fixed_height.url + '">')
//   })
// })


module.exports = api
