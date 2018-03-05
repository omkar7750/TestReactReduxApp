import _ from 'lodash';


const defaultExpenseState = [];
const expensesReducer = (state = defaultExpenseState, action) => {
    switch(action.type){
        case 'ADD_EXPENSE': 
            return [...state, action.expense]
        
        case 'REMOVE_EXPENSE': 
            return state.filter((data) => data.id != action.expenseId)
        
        case 'EDIT_EXPENSE': 
            return state.map((val, i) => val.id == action.id
            ? _.reduce(val, (r, field, k) => {
                    r[k] = action.updates[k]||field;
                    return r;
                }, {})
            : val)

        default:
          return state;
    }
}

export default expensesReducer;