var artistControllers = angular.module('artistControllers', ['ngAnimate']);

artistControllers.controller('ListController', ['$scope', '$http', function($scope, $http) {
    $http.get('javascripts/data.json').success(function(data) {
        $scope.artists = data;
        $scope.artistOrder = 'name';
    });
}]);

artistControllers.controller('DetailsController', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams) {
    $http.get('javascripts/data.json').success(function(data) {
        $scope.artists = data;
        $scope.whichItem = $routeParams.itemId;
    });
}]);