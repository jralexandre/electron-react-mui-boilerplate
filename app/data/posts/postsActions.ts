import { ActionCreator, ActionCreatorsMapObject } from 'redux';
import { PostAction, Post, PostActionTypes } from './postsTypes';

export const addPost: ActionCreator<PostAction> = (data: Post) => ({
    type: PostActionTypes.ADD_POST,
    data
});

export const editPost: ActionCreator<PostAction> = (
    id: number,
    data: Post
) => ({
    type: PostActionTypes.EDIT_POST,
    id,
    data
});

export const deletePost: ActionCreator<PostAction> = (id: number) => ({
    type: PostActionTypes.DELETE_POST,
    id
});

export const postsActionCreators: ActionCreatorsMapObject<PostAction> = {
    addPost,
    editPost,
    deletePost
};
