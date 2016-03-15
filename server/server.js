var express = require('express');
var parser = require('body-parser');
var cors = require('cors');
var amazon = require('amazon-product-api');


var app = express();
var port = process.env.port || 8000;

app.use(parser.json());
app.use(cors());

// serve the app from the client folder
app.use(express.static(__dirname + '/../client'));

app.get('/', function (req, res) {
	
	res.end();
})

app.post('/api/products', function (req, res) {

	console.log(req.body);

	var client = amazon.createClient({
	  awsId: process.env.AWS_ACCESS_KEY_ID,
	  awsSecret: process.env.AWS_SECRET_KEY,
	  awsTag: process.env.ASSOCIATE_TAG
	});

	client.itemSearch({
	  keywords: req.body.keywords,
	  responseGroup: 'ItemAttributes,Offers,Images'
	}, function(err, results, response) {
	  if (err) {
	    console.log(err);
	  } else {
	  	res.send(results);
	  	res.end();
	  }
	});
	
	var dummyData = ['Hat', 'Book', 'Ant Traps', 'Cup']
})


// start server
app.listen(port, function() {
  console.log('Listening on port: ', port);
});

exports.app = app;