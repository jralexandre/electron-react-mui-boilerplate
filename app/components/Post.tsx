import React, { useState } from 'react';

import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import Grid from '@material-ui/core/Grid';
import InputLabel from '@material-ui/core/InputLabel';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import createStyles from '@material-ui/core/styles/createStyles';
import makeStyles from '@material-ui/core/styles/makeStyles';

import { PostType } from '../data/posts/postsTypes';

const useStyles = makeStyles(theme =>
    createStyles({
        root: {
            padding: theme.spacing(2, 2),
            margin: theme.spacing(0, 0, 2, 0)
        },
        button: {
            margin: theme.spacing(0, 1, 0, 0)
        }
    })
);

interface Props {
    post?: PostType;
    editing?: boolean;
    onSave?: (post: PostType) => boolean;
    onDelete?: (post: PostType) => void;
    onCancel?: () => void;
}

const Post = (props: Props): JSX.Element => {
    const [post, setPost] = useState(
        props.post || { id: -1, title: '', content: '' }
    );

    const [editing, setEditing] = useState(props.editing || false);

    const classes = useStyles();

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        if (props.onSave !== undefined) {
            setEditing(props.onSave(post));
        }
    };

    const handleDelete = (): void => {
        if (props.onDelete !== undefined) {
            props.onDelete(post);
        }
    };

    const handleCancel = (): void => {
        if (props.post !== undefined) setPost(props.post);
        setEditing(false);
        if (props.onCancel !== undefined) props.onCancel();
    };

    const handleInputChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ): void => {
        if (e.target.name == 'title')
            setPost({ ...post, title: e.target.value });
        else if (e.target.name == 'content')
            setPost({ ...post, content: e.target.value });
    };

    return (
        <Paper className={classes.root}>
            {editing ? (
                <form onSubmit={handleSubmit}>
                    <Grid container spacing={2} direction="column">
                        <Grid item xs>
                            <TextField
                                type="text"
                                variant="outlined"
                                label="Post title"
                                name="title"
                                value={post.title}
                                onChange={handleInputChange}
                                placeholder="Enter the post's title"
                                required
                            />
                        </Grid>
                        <Grid item xs>
                            <TextField
                                type="text"
                                variant="outlined"
                                multiline
                                fullWidth
                                rows={4}
                                name="content"
                                value={post.content}
                                onChange={handleInputChange}
                                label="Post content"
                                placeholder="Post content"
                                required
                            />
                        </Grid>
                        <Grid item xs>
                            <Button
                                variant="contained"
                                type="submit"
                                className={classes.button}
                            >
                                Save
                            </Button>
                            <Button
                                variant="contained"
                                type="button"
                                className={classes.button}
                                onClick={handleCancel}
                            >
                                Cancel
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            ) : (
                <Grid container spacing={5} direction="column">
                    <Grid item xs>
                        <Typography variant="h3" component="h2" gutterBottom>
                            {post.title}
                        </Typography>
                    </Grid>
                    <Grid item xs>
                        <Typography variant="body2">{post.content}</Typography>
                    </Grid>
                    <Grid item xs>
                        <Button
                            variant="contained"
                            type="button"
                            className={classes.button}
                            onClick={(): void => setEditing(true)}
                        >
                            Edit
                        </Button>
                        <Button
                            variant="contained"
                            type="button"
                            className={classes.button}
                            onClick={handleDelete}
                        >
                            Delete
                        </Button>
                    </Grid>
                </Grid>
            )}
        </Paper>
    );
};

export default Post;
