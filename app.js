var expenseManager = angular.module('expenseManager', ['ui.router'])

expenseManager.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){
	$urlRouterProvider.otherwise("/");
    $stateProvider
	    .state('/', {
	        url: "/",
	        templateUrl: 'app/partials/login.html',
	        controller : 'authController'
	    })
	    .state('/dashboard', {
	        url: "/",
	        templateUrl: 'app/partials/dashboard.html',
	        controller : ''
	    })
	    .state('/dashboardAdmin', {
	        url: "/",
	        templateUrl: 'app/partials/dashboardAdmin.html',
	        controller : ''
	    });
}]);

expenseManager.directive('header', function () {
    return {
        restrict: 'A', //This menas that it will be used as an attribute and NOT as an element. I don't like creating custom HTML elements
        replace: true,
        templateUrl: "directives/header.html"
    }
});

expenseManager.directive('footer', function () {
    return {
        restrict: 'A', //This menas that it will be used as an attribute and NOT as an element. I don't like creating custom HTML elements
        replace: true,
        templateUrl: "directives/footer.html"
    }
});

