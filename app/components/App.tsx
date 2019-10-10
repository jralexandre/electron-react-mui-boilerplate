import { hot } from 'react-hot-loader/root';
import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';

import routes from '../constants/routes';
import Home from './Home';

const App = (): JSX.Element => (
    <Router>
        <Switch>
            <Route path={routes.HOME} component={Home} />
        </Switch>
    </Router>
);

export default hot(App);
