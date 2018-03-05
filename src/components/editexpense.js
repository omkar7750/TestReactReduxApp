import React from 'react';
import {connect} from 'react-redux';
import ExpenseForm from './expenseform.js';
import {editExpense} from  '../actions/expenses.js';

const EditExpense = (props) => (
    <div>
        <ExpenseForm 
        expense = {props.expense}
        onSubmit = {(expense)=> {
            
            props.dispatch(editExpense(props.expense.id, expense));
            props.history.push('/')
        }}/>
        
        
    </div>
)

let mapStateToProps = (state, props) =>{
    return {
        expense:state.expenses.find((val) => val.id === props.match.params.id)
    }
}

export default connect(mapStateToProps)(EditExpense);