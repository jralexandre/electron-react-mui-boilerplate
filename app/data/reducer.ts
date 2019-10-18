import { combineReducers, Reducer } from 'redux';
import { PostsType, PostAction } from './posts/postsTypes';
import posts from './posts/postsReducer';

export interface RootState {
    posts: PostsType;
}

export type RootAction = PostAction;

export type RootReducer = Reducer<RootState, RootAction>;

const createRootReducer = (): RootReducer =>
    combineReducers({
        posts
    });

export default createRootReducer;
