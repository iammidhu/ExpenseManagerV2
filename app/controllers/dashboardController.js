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
        // $scope.dtOptions = DTOptionsBuilder.fromSource($scope.expenses)
        // .withPaginationType('full_numbers');
        // $scope.dtColumns = [
        //     DTColumnBuilder.newColumn('date').withTitle('Date'),
        //     DTColumnBuilder.newColumn('purpose').withTitle('Purpose'),
        //     DTColumnBuilder.newColumn('description').withTitle('Description'),
        //     DTColumnBuilder.newColumn('amount').withTitle('Amount')
        // ];
    });
