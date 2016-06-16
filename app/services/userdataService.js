expenseManager.service('userdataService', function() {


    this.addUserdata = function(userData) {

        var expenses = JSON.parse(localStorage.getItem('expense')) || [];

        expenses.push(userData);

        localStorage.setItem('expense', JSON.stringify(expenses));

    }
    this.list = function() {
        var expense = JSON.parse(localStorage.getItem('expense'));
        return expense;
    }

});
