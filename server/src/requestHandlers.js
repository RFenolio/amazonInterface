var amazon = require('amazon-product-api');

module.exports.products = function (req, res) {

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
}