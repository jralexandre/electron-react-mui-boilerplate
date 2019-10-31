import React, { useState } from 'react';

import Box from '@material-ui/core/Box';
import Fab from '@material-ui/core/Fab';
import Typography from '@material-ui/core/Typography';
import createStyles from '@material-ui/core/styles/createStyles';
import makeStyles from '@material-ui/core/styles/makeStyles';

import AddIcon from '@material-ui/icons/Add';

import Post from './Post';
import { PostsType, PostType } from '../data/posts/postsTypes';

interface Props {
    posts: PostsType;
    addPost: (post: PostType) => void;
    editPost: (id: number, post: PostType) => void;
    deletePost: (id: number) => void;
};

const useStyles = makeStyles(theme =>
    createStyles({
        fab: {
            position: 'fixed',
            bottom: theme.spacing(2),
            right: theme.spacing(2)
        }
    })
);

const Posts = (props: Props): JSX.Element => {
    const classes = useStyles();

    const { posts, addPost, editPost, deletePost } = props;

    const [creating, setCreating] = useState(false);

    if (creating) {
        return (
            <Box>
                <Post
                    editing
                    onSave={post => {
                        addPost(post);
                        setCreating(false);
                        return false;
                    }}
                    onCancel={() => setCreating(false)}
                />
            </Box>
        );
    }

    return (
        <Box>
            {posts.allIds.length > 0 ? (
                posts.allIds.map(id => (
                    <Post
                        key={id}
                        post={posts.byId[id]}
                        onSave={post => {
                            editPost(id, post);
                            return false;
                        }}
                        onDelete={post => {
                            deletePost(post.id);
                        }}
                    />
                ))
            ) : (
                <Typography variant="body2">
                    There is no posts created.
                </Typography>
            )}
            <Fab
                color="primary"
                aria-label="Create post"
                className={classes.fab}
                onClick={() => setCreating(true)}
            >
                <AddIcon />
            </Fab>
        </Box>
    );
};

export default Posts;
