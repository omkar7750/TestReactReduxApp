

let getVisibleData = (expenses, filter) => {
    return expenses.filter((expense) => {
        const startDateCondition = typeof filter.startDate !== 'number' || expense.createdAt >= filter.startDate,
        endDateCondition = typeof filter.endDate !== 'number' || expense.createdAt < filter.endDate, 
        textCondition = expense.description.includes(filter.text);


        return startDateCondition && endDateCondition && textCondition;
    })
    .sort((a, b) => {
        if(filter.sortBy === 'date'){
            return a.createdAt > b.createdAt ? 1: -1; 
        }
        else if(filter.sortBy === 'amount'){
            return a.amount > b.amount? 1: -1;
        }
    })
}

export default getVisibleData;