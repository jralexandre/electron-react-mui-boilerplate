import React from 'react';

import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import createStyles from '@material-ui/core/styles/createStyles';
import makeStyles from '@material-ui/core/styles/makeStyles';

import PostsContainer from './PostsContainer';

const useStyles = makeStyles(theme =>
    createStyles({
        root: {
            padding: theme.spacing(2, 2)
        }
    })
);

const Home = (): JSX.Element => {
    const classes = useStyles();

    return (
        <Box className={classes.root}>
            <Typography variant="h2" component="h1" gutterBottom>
                Home
            </Typography>
            <PostsContainer />
        </Box>
    );
};

export default Home;
