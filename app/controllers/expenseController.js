expenseManager.controller('expenseController', function($scope,$state){
	$scope.logout = true;
    $scope.openExpense = function() {
        $state.go('/expense');
    }
});

expenseManager.controller('expenseTableCtrl', expenseTableCtrl);
function expenseTableCtrl(DTOptionsBuilder, DTColumnBuilder) {
    var vm = this;
    vm.dtOptions = DTOptionsBuilder.fromSource('../app/json/data.json')
        .withPaginationType('full_numbers');
    vm.dtColumns = [
        DTColumnBuilder.newColumn('date').withTitle('Date'),
        DTColumnBuilder.newColumn('purpose').withTitle('Purpose'),
        DTColumnBuilder.newColumn('description').withTitle('Description'),
        DTColumnBuilder.newColumn('amount').withTitle('Amount')
    ];
}
