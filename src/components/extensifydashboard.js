
import React from 'react';
import ExpenseList from './expenselist.js';
import TextFilter from './expenselistfilters.js'

const ExtensifyDashBoard = () => (
    <div>
        Temp dashboard div<br />
        Filter: <TextFilter> </TextFilter>
        <ExpenseList />

    </div>
)

export default ExtensifyDashBoard;