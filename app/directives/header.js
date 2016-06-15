angular.module("expenseManager").directive("header", function() {
    return {
        restrict: 'AE',
        controller: ['$scope', '$state', function ($scope, $state) {
          $scope.logout = function() {
            localStorage.removeItem('name');
            $state.go('login');
          }
        }],
        templateUrl: '../app/partials/header.html',
    };
});
