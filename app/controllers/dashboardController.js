expenseManager.controller('dashboardController', function($scope,$state,userdataService,$resource,DTOptionsBuilder, DTColumnBuilder){

    $scope.userData = { fields: [] };
    $scope.openExpense = function() {
        $scope.date = "";
        $scope.purpose = "";
        $scope.description = "";
        $scope.amount = "";
        $state.go('/expense');
    }

     $scope.expenses = userdataService.list();

     console.log($scope.expenses);
});

