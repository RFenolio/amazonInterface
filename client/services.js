angular.module('amazon.services', [])
	.factory('Products', function ($http) {
		var getProducts = function(keywords) {
			return $http.post('/api/products', {
				keywords: keywords
			});
		};

		return {
			getProducts: getProducts
		};
	});