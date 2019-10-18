import React from 'react';

import Typography from '@material-ui/core/Typography';
import PostsContainer from './PostsContainer';

const Home = (): JSX.Element => (
    <>
        <Typography variant="h2" component="h1" gutterBottom>
            Home
        </Typography>
        <PostsContainer />
    </>
);

export default Home;
