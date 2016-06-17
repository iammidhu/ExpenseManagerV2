expenseManager.controller('dashboardAdminController', function($scope,$state,userdataService,$filter,DTOptionsBuilder, DTColumnBuilder){

    
    $scope.expenses = userdataService.list();
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

