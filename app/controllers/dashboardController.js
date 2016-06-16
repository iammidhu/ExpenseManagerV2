expenseManager.controller('dashboardController', function($scope,$state,userdataService,DTOptionsBuilder, DTColumnBuilder){

    $scope.openExpense = function() {
        $scope.date = "";
        $scope.purpose = "";
        $scope.description = "";
        $scope.amount = "";
        $state.go('expense');
    }

     $scope.expenses = userdataService.list();


});

