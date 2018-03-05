import React, { Component } from 'react';
import {MuiThemeProvider, Button, FormLabel, Modal, FlatButton} from 'material-ui';
import _ from 'lodash';
import Header from './components/header.js';
import Footer from './components/footer.js';

// trying indecision app

import {configureStore} from './palyground/redux_expensify';
import {addExpense} from './actions/expenses.js';



// let store = configureStore();
// store.subscribe(() => {
//   console.log(store.getState());
// })
// store.dispatch(addExpense({description : "ok", note: "note ok", amount: 5000}));


//import {Provider} from 'react-redux';

import ExpenseList from './components/expenselist.js';

class ExtensifyApp extends Component{
  render = () => {
    return (
        <div>
            <Header hTitle='Expensify'/>
            <ExpenseList />
            <Footer fTitle='@ok'/>
        </div>)
  }
}


export default ExtensifyApp;
