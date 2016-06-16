expenseManager.controller('dashboardController',
    function($scope, $state, userdataService, $resource, DTOptionsBuilder, DTColumnDefBuilder) {
        $scope.expenses = userdataService.list();
        $scope.dtOptions = DTOptionsBuilder.newOptions().withPaginationType('full_numbers');
        $scope.dtColumnDefs = [
            DTColumnDefBuilder.newColumnDef(0),
            DTColumnDefBuilder.newColumnDef(1),
            DTColumnDefBuilder.newColumnDef(2),
            DTColumnDefBuilder.newColumnDef(3).notSortable()
        ];
        $scope.removeExpense = removeExpense;
        $scope.modifyPerson = modifyPerson;

        function removeExpense(index) {
            $scope.expenses.splice(index, 1);
            localStorage.setItem('expense', JSON.stringify($scope.expenses));
        }

        function modifyPerson(index) {

        }
    });
