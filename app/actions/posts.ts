import { ActionCreator, Action, ActionCreatorsMapObject } from 'redux';
import { Post } from '../reducers/posts';

export const ADD_POST = 'ADD_POST';
export const EDIT_POST = 'EDIT_POST';
export const DELETE_POST = 'DELETE_POST';

export interface AddPostAction extends Action<typeof ADD_POST> {
    data: Post;
}

export interface EditPostAction extends Action<typeof EDIT_POST> {
    id: number;
    data: Post;
}

export interface DeletePostAction extends Action<typeof DELETE_POST> {
    id: number;
}

export type PostAction = AddPostAction | EditPostAction | DeletePostAction;

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
