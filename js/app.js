var myApp = angular.module('myApp', ['ngRoute', 'firebase']);

myApp.config(['$routeProvider', function($routeProvider){
	$routeProvider.
	when('/', {
		templateUrl: 'views/home.html'
	}).
	when('/list', {
		templateUrl: 'views/list.html',
		controller: 'ListController'
	}).
	otherwise({
		redirectTo: '/'
	});
}]);

myApp.run(function($rootScope) {
	$rootScope.$on("$routeChangeSuccess", function (event, currentRoute, previousRoute) {
		window.scrollTo(0, 0);
	});
});

