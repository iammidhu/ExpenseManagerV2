expenseManager.filter('daterangeFilter', function ()
{
  return function(expenses, dateFrom, dateTo)
	{
		var result = [];

		// date filters
		var start_date = (dateFrom && !isNaN(Date.parse(dateFrom))) ? Date.parse(dateFrom) : 0;
		var end_date = (dateTo && !isNaN(Date.parse(dateTo))) ? Date.parse(dateTo) : new Date().getTime();

		// if the expenses are loaded
		if (expenses && expenses.length > 0)
		{
			$.each(expenses, function (index, expenses)
			{
				var expenseDate = new Date(expenses.date);

				if (expenseDate >= start_date && expenseDate <= end_date)
				{
					result.push(expenses);
				}
			});

			return result;
		}
	};
});