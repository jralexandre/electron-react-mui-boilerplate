import { Action } from 'redux';

export enum PostActionTypes {
    ADD_POST = 'ADD_POST',
    EDIT_POST = 'EDIT_POST',
    DELETE_POST = 'DELETE_POST'
}

export interface AddPostAction extends Action<PostActionTypes.ADD_POST> {
    data: PostType;
}

export interface EditPostAction extends Action<PostActionTypes.EDIT_POST> {
    id: number;
    data: PostType;
}

export interface DeletePostAction extends Action<PostActionTypes.DELETE_POST> {
    id: number;
}

export type CustomPostAction = Action<''>;

export type PostAction =
    | AddPostAction
    | EditPostAction
    | DeletePostAction
    | CustomPostAction;

export interface PostType {
    id: number;
    title: string;
    content: string;
}

export interface PostsType {
    byId: {
        [id: number]: PostType;
    };
    allIds: number[];
    newPostId: number;
}
