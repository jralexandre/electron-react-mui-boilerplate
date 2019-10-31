import { hot } from 'react-hot-loader/root';
import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Box from '@material-ui/core/Box';
import makeStyles from '@material-ui/core/styles/makeStyles';
import createStyles from '@material-ui/core/styles/createStyles';

import routes from '../constants/routes';
import Home from './Home';
import CssBaseline from '@material-ui/core/CssBaseline';

const useStyles = makeStyles(() =>
    createStyles({
        rootBox: {
            marginTop: '5px'
        }
    })
);

export const App = (): JSX.Element => {
    const classes = useStyles();

    return (
        <>
            <CssBaseline />
            <Box className={classes.rootBox}>
                <Switch>
                    <Route path={routes.HOME.path} component={Home} />
                </Switch>
            </Box>
        </>
    );
};

export default hot(App);
