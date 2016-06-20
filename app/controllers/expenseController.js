expenseManager.controller('expenseController', function($scope, $state, userdataService, $stateParams) {
    $scope.locations = ["Trivandrum", "Kochi", "Koratty", "Calicut", "Poland"];
    $scope.purposes = ['Electicity Bill', 'Internet Bill', 'Transportation'];
    if ($stateParams.id) {
        $scope.edit = true;
        $scope.list = userdataService.list();
        if ($scope.list) {
            $scope.expense = $scope.list[$stateParams.id];
            $scope.newexpense = $scope.expense;
        }
    } else {
        $scope.edit = false;
    }
    $scope.saveData = function(newexpense) {
        var index = $stateParams.id;
        userdataService.updateData(index, newexpense);
        $state.go("dashboard");
    }
    $scope.addExpense = function() {
        userdataService.addUserdata($scope.newexpense);
        $scope.newexpense = {};
        $state.go('dashboard');
    }

});
