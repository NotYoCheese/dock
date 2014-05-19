var myApp = angular.module('myApp', [
    'ngRoute',
    'artistControllers'
]);

myApp.config(['$routeProvider', function($routeProvider) {
    $routeProvider.
    when('/list', {
        templateUrl: 'partials/list.jade',
        controller: 'ListController'
    }).
    when('/details/:itemId', {
        templateUrl: 'partials/details.jade',
        controller: 'DetailsController'
    }).
    otherwise({
        redirectTo: '/list'
    })
}]);