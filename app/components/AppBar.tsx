import React from 'react';
import {
    useLocation,
    Link as RouterLink,
    matchPath
} from 'react-router-dom';

import IconButton from '@material-ui/core/IconButton';
import MuiAppBar from '@material-ui/core/AppBar';
import Link from '@material-ui/core/Link';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import ArrowBack from '@material-ui/icons/ArrowBack';

import routes from '../constants/routes';

const AppBar = (): JSX.Element => {
    const location = useLocation();
    const route = Object.values(routes)
        .filter(r => matchPath(location.pathname, r.path) !== null)
        .shift();
    const displayName = route === undefined ? 'Home' : route.displayName;

    return (
        <MuiAppBar position="static">
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
        </MuiAppBar>
    );
};

export default AppBar;
