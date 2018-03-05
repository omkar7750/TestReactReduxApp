import shortid from 'shortid';




//action generators
let addExpense = (
    {
        description = "", 
        note = '', 
        amount = 0, 
        createdAt = 0
    } = {}
) => ({    
        type: 'ADD_EXPENSE',
        expense: {
            id: shortid.generate(),
            description,
            note,
            amount,
            createdAt
        }
}),


removeExpense = ({id}) => ({
    type: 'REMOVE_EXPENSE',
    expenseId: id
}),


editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
})


export {addExpense, editExpense, removeExpense};