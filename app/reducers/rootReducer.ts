import { combineReducers, Reducer } from 'redux';
import posts, { Posts } from './posts';
import { PostAction } from '../actions/posts';

export interface RootState {
    posts: Posts;
}

export type RootAction = PostAction;

export type RootReducer = Reducer<RootState, RootAction>;

const createRootReducer = (): RootReducer =>
    combineReducers({
        posts
    });

export default createRootReducer;
