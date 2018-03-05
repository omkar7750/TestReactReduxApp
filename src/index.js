import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
//import App from './App';

// import registerServiceWorker from './registerServiceWorker';


import { Provider } from 'react-redux';

import AppRouter from './components/approuter';
import { configureStore } from './palyground/redux_expensify';
import {addExpense} from './actions/expenses.js';
import {setTextFilter} from './actions/filters.js';

let store = configureStore();



store.dispatch(addExpense({description : "light bills", note: "light", amount: 500}));
store.dispatch(addExpense({description : "gas bills", note: "gas", amount: 2000}));
store.dispatch(addExpense({description : "water bills", note: "water", amount: 1000}));
store.dispatch(setTextFilter('bills'));

const JSX = (<Provider store={store}>
        <AppRouter />
    </Provider>);

ReactDOM.render(JSX, document.getElementById('root'));

