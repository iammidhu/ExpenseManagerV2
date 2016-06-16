
expenseManager.controller('expenseController', function($scope, $state, userdataService) {
    $scope.addExpense = function() {
        userdataService.addUserdata($scope.newexpense);
        $scope.newexpense = {};
        $state.go('dashboard');
    }
});
