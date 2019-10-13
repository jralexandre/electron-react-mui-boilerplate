import { hot } from 'react-hot-loader/root';
import React from 'react';
import {
    Switch,
    Route,
    useLocation,
    Link as RouterLink,
    matchPath
} from 'react-router-dom';

import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import IconButton from '@material-ui/core/IconButton';
import Link from '@material-ui/core/Link';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import makeStyles from '@material-ui/core/styles/makeStyles';
import createStyles from '@material-ui/core/styles/createStyles';

import ArrowBack from '@material-ui/icons/ArrowBack';

import routes from '../constants/routes';
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
    const location = useLocation();
    const route = Object.values(routes)
        .filter(r => matchPath(location.pathname, r.path) !== null)
        .shift();
    const displayName = route === undefined ? 'Home' : route.displayName;
    return (
        <>
            <AppBar position="static">
                <Toolbar>
                    {route !== undefined && route.returnTo !== undefined ? (
                        <Link
                            color="inherit"
                            component={RouterLink}
                            to={route.returnTo}
                        >
                            <IconButton color="inherit">
                                <ArrowBack />
                            </IconButton>
                        </Link>
                    ) : (
                        ''
                    )}
                    <Typography variant="h6">{displayName}</Typography>
                </Toolbar>
            </AppBar>
            <Box className={classes.rootBox}>
                <Switch>
                    <Route path={routes.HOME.path} component={Home} />
                </Switch>
            </Box>
        </>
    );
};

export default hot(App);
