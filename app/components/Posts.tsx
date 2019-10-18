import React from 'react';

import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { ConnectedProps } from './PostsContainer';

type Props = ConnectedProps;

const Posts = ({ posts }: Props): JSX.Element => (
    <Box>
        {posts.allIds.length > 0 ? (
            posts.allIds.map(id => (
                <Paper key={id}>
                    <Typography variant="h3" component="h2" gutterBottom>{posts.byId[id].title}</Typography>
                    <Typography variant="body2">
                        {posts.byId[id].content}
                    </Typography>
                </Paper>
            ))
        ) : (
            <Typography variant="body2">There is no posts created.</Typography>
        )}
    </Box>
);

export default Posts;
