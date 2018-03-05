
import React from 'react';
import {connect} from 'react-redux';
import getVisibleData from '../selectors/expenses.js';
import {removeExpense} from '../actions/expenses.js';
import {Link} from 'react-router-dom';
import {
  Table,
  TableBody,
  TableRow
} from 'material-ui';

let getTableTemplate = () => (
    <TableRow>
        <td> Description</td>
        <td> Amount</td>
        <td> Note</td>
        <td> Created At</td>
    </TableRow>
)



let ExpenseListItem = ({description, amount, note, createdAt, id}, i, {history, dispatch}) => {
    return (<TableRow key = {i}>
                            <td key = {`${i}d`}> {description} </td>
                            <td key = {`${i}a`}> {amount} </td>
                            <td key = {`${i}n`}> {note} </td>
                            <td key = {`${i}c`}> {createdAt} </td>
                            <td key = {`${i}remove`}> 
                            <Link to={`/edit/${id}`} ><button > Edit </button></Link>
                            <button onClick={(e) => {
                                    dispatch(removeExpense({id}))
                                }}
                            > Remove </button>
                            </td>
            </TableRow>)
}


let ExpenseList = (props) => {
    console.log('props',props)
    return (
        <div>
            <h2>Expense List</h2>
            <Table>
            {getTableTemplate ()}
            <TableBody>
            {props.expenses.map((expense, i) => {
                return ExpenseListItem(expense, i, props);
            })}
            </TableBody>
            </Table>
        </div>
    )
}

let mapStateToProps = (state) => {
    return {
        expenses: getVisibleData(state.expenses, state.filters)
    }
}

let ConnectedExpenseList = connect(mapStateToProps)(ExpenseList)


export default ConnectedExpenseList;