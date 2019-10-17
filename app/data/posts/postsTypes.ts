import { Action } from 'redux';

export const ADD_POST = 'ADD_POST';
export const EDIT_POST = 'EDIT_POST';
export const DELETE_POST = 'DELETE_POST';

export interface AddPostAction extends Action<string> {
    data: Post;
}

export interface EditPostAction extends Action<string> {
    id: number;
    data: Post;
}

export interface DeletePostAction extends Action<string> {
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
