expenseManager.controller('expenseController', function($scope,$state,userdataService,$resource,DTOptionsBuilder, DTColumnBuilder){

    $scope.userData = { fields: [] };

    $scope.addExpense = function() {
        userdataService.addUserdata($scope.newexpense);
        $scope.newexpense = {};

        $state.go('/dashboard');

        /*$scope.userData.fields.push({ 'date':$scope.date, 'purpose': $scope.purpose,'description':$scope.description, 'amount':$scope.amount});

        console.log($scope.userData.fields)
        $scope.dtOptions = DTOptionsBuilder.fromSource($scope.userData.fields)
        .withPaginationType('full_numbers');
        $scope.dtColumns = [
            DTColumnBuilder.newColumn('date').withTitle('Date'),
            DTColumnBuilder.newColumn('purpose').withTitle('Purpose'),
            DTColumnBuilder.newColumn('description').withTitle('Description'),
            DTColumnBuilder.newColumn('amount').withTitle('Amount')
        ];*/

    }
});

