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

    this.updateData = function(index, newData) {
        var expense = JSON.parse(localStorage.getItem('expense'));
        expense[index] = newData;
        localStorage.removeItem('expense');
        localStorage.setItem('expense', JSON.stringify(expense));
    }

});
