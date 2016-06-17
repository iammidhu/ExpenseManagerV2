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
        $scope.editExpense = editExpense;

        function removeExpense(index) {
            $scope.expenses.splice(index, 1);
            localStorage.setItem('expense', JSON.stringify($scope.expenses));
        }

        function editExpense(index) {
          console.log($scope.expenses[index]);
          var singleExpense = $scope.expenses[index];
          $scope.date = singleExpense['date'];
          $scope.purpose = singleExpense['purpose'];
          debugger;
        }
    });
