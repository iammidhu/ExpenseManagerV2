expenseManager.controller('expenseController', function($scope,$state,userdataService,DTOptionsBuilder, DTColumnBuilder){

    $scope.userData = { fields: [] };

    $scope.addExpense = function() {
        userdataService.addUserdata($scope.newexpense);
        $scope.newexpense = {};

        $state.go('dashboard');

    }
});

