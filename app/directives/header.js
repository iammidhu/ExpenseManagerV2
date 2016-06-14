angular.module("expenseManager").directive("header", function() {
    return {
        restrict: 'AE',
        templateUrl: '../app/partials/header.html'
    };
});
