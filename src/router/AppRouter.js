import React from 'react';
import { Router, Route, Switch, Link, NavLink } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import ExpenseDashboardPage from '../components/Dashboard';
import AddExpensePage from '../components/Add';
import EditExpensePage from '../components/Edit';
import HelpPage from '../components/Help';
import NotFound from '../components/Error';
import LoginPage from '../components/Login';
import PrivateRoute from './PrivateRoute';

export const history = createHistory();

const AppRouter = () => (

    <Router history={history}>
        <div>
            <Switch>
                <Route path='/' component={ LoginPage } exact = {true} />
                <PrivateRoute path='/dashboard' component={ ExpenseDashboardPage } />
                <PrivateRoute path='/create' component={ AddExpensePage } />
                <PrivateRoute path='/edit/:id' component={ EditExpensePage } />
                <Route path='/help' component={ HelpPage } />
                <Route component={ NotFound } />
            </Switch>
        </div>
    </Router>

);

export default AppRouter;