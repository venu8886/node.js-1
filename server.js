// Import required modules
var express = require('express')
var bodyParser = require('body-parser');

const port = 3000

// Create an app with express frame work
var app = express()

// Create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })

// Use the express.static to server the pages
app.use(express.static('public'))

// Get the page when we try to run the /
app.get('/index.htm', function(req, res){
    res.sendFile( __dirname + "/" + "index.htm")
})


// Get the process_get response
app.get('/process_get', urlencodedParser, function(req, res){
    // Prepare output in JSON format
    response = {
	first_name:req.query.first_name,
	last_name:req.query.last_name
    }
    console.log(response)
    res.end(JSON.stringify(response))
})

var server = app.listen(port, function () {
    var host = server.address().address
    var port = server.address().port

    console.log("Example app listening at http://%s:%s", host, port)
})
