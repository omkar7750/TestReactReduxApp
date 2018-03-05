import {createStore, combineReducers} from 'redux';
import shortid from 'shortid';
import _ from 'lodash';
import getVisibleData from '../selectors/expenses.js';
import {getClonedObject} from '../utility/index.js';

import {addExpense, editExpense, removeExpense} from '../actions/expenses.js';
import {setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate} from '../actions/filters.js';




import expensesReducer from '../reducers/expenses.js';
import filterReducer from '../reducers/filters.js';
//ADD_EXPENSE
//REMOVE_EXPENSE
//EDIT_EXPENSE
//SORT_TEXT_FILTER
//SORT_BY_DATE
//SORT_BY_AMOUNT
//SET_START_DATE
//SET_END_DATE

//TEXT_FILTER


let configureStore = () => {

    //combineReducers
    const combineReducer = combineReducers({
        expenses:expensesReducer,
        filters: filterReducer
    })

    return createStore(combineReducer);
}




export {configureStore};




// let unsubscribe = store.subscribe(() => {
//     let state = store.getState();
//     let result = getVisibleData(state.expenses, state.filters);
//     console.log(result);
// });






// let expenseOne = store.dispatch(addExpense({
//             description: 'jan rent',
//             note: 'this was the pre-final rent for that address',
//             amount: 25000,
//             createdAt:0
// }))

// let expenseTwo = store.dispatch(addExpense({
//             description: 'feb rent',
//             note: 'this was the final rent for that address',
//             amount: 25000,
//             createdAt:0
// }))

// let expenseRemoved = store.dispatch(removeExpense(expenseOne.expense));


// let expenseEdited = store.dispatch(editExpense(expenseTwo.expense.id, {
//             description: 'feb rent',
//             note: 'this was the final rent for that address',
//             amount: 26000
// }));

// store.dispatch(setTextFilter('rent'));
// store.dispatch(sortByAmount());

// store.dispatch(sortByDate());

// store.dispatch(setStartDate(10));
// store.dispatch(setEndDate(100));



// //demo state
// let demoState = {
//     expenses: [
//         {
//             id:'123',
//             description: 'jan rent',
//             note: 'this was the final rent for that address',
//             amount: 25000,
//             createdAt:0
//         }
//     ],
//     filters:{
//         text: 'rent',
//         sortBy: 'amount',
//         startDate: undefined,
//         endDate: undefined

//     }
// }
