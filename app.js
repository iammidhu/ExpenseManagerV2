angular.module('expenseManager', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
    $routeProvider.
    when('/', {
        templateUrl: 'app/partials/login.html',
    }).
    when('/dashboard', {
        templateUrl: 'app/partials/dashboard.html',
    }).
    when('/expense', {
        templateUrl: 'app/partials/expense.html',
    }).
    otherwise({ redirectTo: '/' })
}]);
