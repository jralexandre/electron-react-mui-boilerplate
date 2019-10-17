import { Action } from 'redux';

export enum PostActionTypes {
    ADD_POST = 'ADD_POST',
    EDIT_POST = 'EDIT_POST',
    DELETE_POST = 'DELETE_POST'
}

export interface AddPostAction extends Action<PostActionTypes.ADD_POST> {
    data: Post;
}

export interface EditPostAction extends Action<PostActionTypes.EDIT_POST> {
    id: number;
    data: Post;
}

export interface DeletePostAction extends Action<PostActionTypes.DELETE_POST> {
    id: number;
}

export type PostAction = AddPostAction | EditPostAction | DeletePostAction;

export interface Post {
    id: number;
    title: string;
    content: string;
}

export interface Posts {
    byId: {
        [id: number]: Post;
    };
    allIds: number[];
    newPostId: number;
}
