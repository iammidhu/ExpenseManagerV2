expenseManager.controller('dashboardController',
    function($scope, $state, userdataService, DTOptionsBuilder, DTColumnDefBuilder) {
        $scope.expenses = userdataService.list();
        $scope.dtOptions = DTOptionsBuilder.newOptions().withPaginationType('full_numbers');
        $scope.dtColumnDefs = [
            DTColumnDefBuilder.newColumnDef(0).notSortable(),
            DTColumnDefBuilder.newColumnDef(1).notSortable(),
            DTColumnDefBuilder.newColumnDef(2).notSortable(),
            DTColumnDefBuilder.newColumnDef(3).notSortable()
        ];
        $scope.removeExpense = removeExpense;
        $scope.editExpense = editExpense;

        function removeExpense(index) {
            $scope.expenses.splice(index, 1);
            localStorage.setItem('expense', JSON.stringify($scope.expenses));
        }

        function editExpense(index) {
            $state.go('expense', {
                id: "index"
            })
        }
    });
