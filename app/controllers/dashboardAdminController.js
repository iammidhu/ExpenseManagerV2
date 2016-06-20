expenseManager.controller('dashboardAdminController', function($scope, $state, $filter, userdataService,DTOptionsBuilder, DTColumnDefBuilder){

    $scope.expenses = userdataService.list();
    $scope.locations = ["Trivandrum", "Kochi", "Koratty", "Calicut", "Poland"];

    $scope.dtOptions = DTOptionsBuilder.newOptions().withPaginationType('full_numbers');
    $scope.dtColumnDefs = [
       DTColumnDefBuilder.newColumnDef(0).notSortable(),
       DTColumnDefBuilder.newColumnDef(1).notSortable(),
       DTColumnDefBuilder.newColumnDef(2).notSortable(),
       DTColumnDefBuilder.newColumnDef(3).notSortable()
    ];
    $scope.dtInstanceCallback = function (dtInstance) {
    	var datatableObj = dtInstance;
        $scope.tableInstance = datatableObj;
    }
    $scope.searchTable = function ()
    {
        var query = $scope.searchText;
        var result = $scope.tableInstance.DataTable.search(query, false, false, false);
		
        $scope.tableInstance.DataTable.search(query, false, false, true).draw();
        console.log(result)
    };

    $scope.getTotal = function(expense){
    	var total = 0;
    	$scope.expensesFiltered = [];
    	$scope.expensesFiltered = $filter('daterangeFilter')($scope.expenses, $scope.dateFrom, $scope.dateTo);
	    for(var i = 0; i < $scope.expensesFiltered.length; i++){
	        var amount = $scope.expensesFiltered[i].amount;
	        total += amount;
	    }

	    return total;
	    
	}

		
});

