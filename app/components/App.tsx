import { hot } from 'react-hot-loader/root';
import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Box from '@material-ui/core/Box';
import makeStyles from '@material-ui/core/styles/makeStyles';
import createStyles from '@material-ui/core/styles/createStyles';

import routes from '../constants/routes';
import AppBar from './AppBar';
import Home from './Home';

const useStyles = makeStyles(() =>
    createStyles({
        rootBox: {
            marginTop: '5px'
        }
    })
);

const App = (): JSX.Element => {
    const classes = useStyles();

    return (
        <>
            <AppBar />
            <Box className={classes.rootBox}>
                <Switch>
                    <Route path={routes.HOME.path} component={Home} />
                </Switch>
            </Box>
        </>
    );
};

export default hot(App);
