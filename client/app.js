angular.module('amazon', [
		'amazon.services',
	])
	.controller('amazonCtrl', function($scope, Products) {
		$scope.products = [];

		$scope.search = function (cb) {
			Products.getProducts($scope.keywords)
				.then(function (products) {
					console.log(products)
					$scope.products = products.data
				})
		};
	})