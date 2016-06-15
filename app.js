var expenseManager = angular.module('expenseManager', ['ui.router','datatables'])

expenseManager.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){
	$urlRouterProvider.otherwise("/login");
    $stateProvider
	    .state('login', {
	        url: "/login",
	        templateUrl: 'app/partials/login.html',
	        controller : 'authController'
	    })
	    .state('dashboard', {
	        url: "/dashboard",
	        templateUrl: 'app/partials/dashboard.html',
	        controller : 'expenseController'
	    })
	    .state('admin', {
	        url: "/dashboardAdmin",
	        templateUrl: 'app/partials/dashboardAdmin.html',
	        controller : ''
	    })
	    .state('expense', {
	        url: "/expense",
	        templateUrl: 'app/partials/expense.html',
	        controller : ''
	    });
}]);
