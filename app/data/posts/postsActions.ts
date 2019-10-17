import { ActionCreator, ActionCreatorsMapObject } from 'redux';
import { AddPostAction, EditPostAction, DeletePostAction, PostAction, Post, ADD_POST, EDIT_POST, DELETE_POST } from './postsTypes';

export const addPost: ActionCreator<AddPostAction> = (data: Post) => ({
    type: ADD_POST,
    data
});

export const editPost: ActionCreator<EditPostAction> = (
    id: number,
    data: Post
) => ({
    type: EDIT_POST,
    id,
    data
});

export const deletePost: ActionCreator<DeletePostAction> = (id: number) => ({
    type: DELETE_POST,
    id
});

export const postsActionCreators: ActionCreatorsMapObject<PostAction> = {
    addPost,
    editPost,
    deletePost
};
