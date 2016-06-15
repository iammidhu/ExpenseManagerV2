    expenseManager.controller('authController', function($scope, $state) {
        $scope.submitLogin = function(email, password) {
            if (email == "" || password == "" || email == undefined || password == undefined) {
                $scope.error = true;
                return false;
            } else {
                if (email.indexOf('@') == -1) {
                    $scope.emailerror = true;
                    return false;
                } else {
                    if (email == "user@qburst.com" && password == "user") {
                        localStorage.setItem("name", "user");
                        $scope.error = true;
                        $state.go('/dashboard');
                    } else if (email == "admin@qburst.com" && password == "admin") {
                        localStorage.setItem("name", "admin");
                        $state.go('/dashboardAdmin');
                    } else {
                        $scope.validationerror = true;
                    }
                }
            }
        }
    });
