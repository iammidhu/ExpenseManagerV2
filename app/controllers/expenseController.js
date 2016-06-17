expenseManager.controller('expenseController', function($scope, $state, userdataService) {
    $scope.locations = ["Trivandrum", "Kochi", "Koratty", "Calicut", "Poland"];
    $scope.purposes = ['Electicity Bill', 'Internet Bill', 'Transportation'];
    // var singleExpense = $scope.expenses[index];
    // $scope.date = singleExpense['date'];
    // $scope.purpose = singleExpense['purpose'];
    $scope.addExpense = function() {
        userdataService.addUserdata($scope.newexpense);
        $scope.newexpense = {};
        $state.go('dashboard');
    }

});
