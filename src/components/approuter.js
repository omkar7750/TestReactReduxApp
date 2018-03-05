import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Header from './header';
import AddExpense from './createexpense';
import EditExpense from './editexpense';
import HelpExpense from './helpexpense';
import ExtensifyDashBoard from './extensifydashboard';
import Footer from './footer';
import NotFoundExpense from './notfound';



const AppRouter = ()=>(
    <BrowserRouter>
        <div>
            <Header hTitle = 'Extensify'/>
            <Switch>
                <Route path='/' component = {ExtensifyDashBoard} exact={true}/>
                <Route path='/create' component = {AddExpense}/>
                <Route path='/edit/:id' component = {EditExpense}/>
                <Route path='/help' component = {HelpExpense}/>
                <Route component = {NotFoundExpense}/>
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;