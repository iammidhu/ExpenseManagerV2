expenseManager.controller('dashboardAdminController', function($scope,$state,userdataService,DTOptionsBuilder, DTColumnBuilder){

    
     $scope.expenses = userdataService.list();


});

