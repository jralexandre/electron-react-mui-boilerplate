import React from 'react';
import {  Switch, Route, BrowserRouter as Router } from 'react-router-dom';

import routes from '../constants/routes';
import Home from './Home';

export default function App(): JSX.Element {
    return (
        <Router>
            <Switch>
                <Route path={routes.HOME} component={Home} />
            </Switch>
        </Router>
    );
}
