expenseManager.service('userdataService', function(){

    var uid = 1;
    var expenses = [{
        id: 0,
        'Date': '',
        'Purpose': '',
        'Description': '',
        'Amount': '',
    }];
    this.addUserdata = function (userData) {
        if (userData.id == null) {
            userData.id = uid++;
            expenses.push(userData);
        } else {
            for (i in expenses) {
                if (expenses[i].id == userData.id) {
                    expenses[i] = userData;
                }
            }
        }
    }
    this.list = function () {
        return expenses;
    }

});
