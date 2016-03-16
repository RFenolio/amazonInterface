var express = require('express');
var parser = require('body-parser');
var cors = require('cors');
var amazon = require('amazon-product-api');
var handlers = require('./src/requesthandlers')


var app = express();
var port = process.env.port || 8000;

app.use(parser.json());
app.use(cors());

// serve the app from the client folder
app.use(express.static(__dirname + '/../client'));

// not getting anything on the base route yet
app.get('/', function (req, res) {
	
	res.end();
})

// post search query for amazon, and return results
app.post('/api/products', handlers.products);


// start server
app.listen(port, function() {
  console.log('Listening on port: ', port);
});

exports.app = app;