var express = require('express')
var app = express()
var bodyParser = require('body-parser')
app.use(bodyParser.json())
var apiRoutes = require('./api.js')

app.use('/api', apiRoutes)


app.listen(3000, function(){
  console.log("Server active on port 3000.")
})
