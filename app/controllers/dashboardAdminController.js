expenseManager.controller('dashboardAdminController', function($scope, $state, $filter, userdataService,DTOptionsBuilder, DTColumnBuilder){

    
    $scope.expenses = userdataService.list();
    $scope.dateFrom, $scope.dateTo;

    $scope.$watchGroup(['dateFrom', 'dateTo'], function(newValues, oldValues, scope) {
    	console.log(newValues);
    	console.log(oldValues);
    	debugger;
    	$filter('daterangeFilter')($scope.expenses, $scope.dateFrom, $scope.dateTo);
	});
    // $scope.$watch('dateFrom', 'dateTo', function(val){
    // 	console.log(val);
    // 	$filter('daterangeFilter')($scope.expenses, $scope.dateFrom, $scope.dateTo);
    // })
    $scope.getTotal = function(){
	    var total = 0;
	    for(var i = 0; i < $scope.expenses.length; i++){
	        var amount = $scope.expenses[i].amount;
	        total += amount;
	    }
	    return total;
	}

		/*$scope.dtInstance = function(dtinstance) {
			console.log("fhdgfh", dtinstance)
			var table = dtinstance.DataTable;
			$scope.filterTable = function(data) {
				table.clear();
				console.log(data);
				table.search(data).draw();
			}

		};*/
});

