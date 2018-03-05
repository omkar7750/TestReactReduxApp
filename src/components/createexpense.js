import React from 'react';
import ExpenseForm from './expenseform.js';
import {connect} from 'react-redux';
import {addExpense} from '../actions/expenses.js';


const AddExpense = (props) => (
    <div>
        <h1>Add Expense</h1>
        <ExpenseForm onSubmit = {(expense) => {
            console.log('from create expense : ',expense);
            props.dispatch(addExpense(expense));
            props.history.push('/')
        }} />
    </div>
)



export default connect()(AddExpense);