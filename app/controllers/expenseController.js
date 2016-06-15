expenseManager.controller('expenseController', function($scope, $state) {
    $scope.logout = true;
    $scope.openExpense = function() {
        $state.go('expense');
    }
});
