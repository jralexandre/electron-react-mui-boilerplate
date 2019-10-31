import { connect } from 'react-redux';
import Posts from './Posts';

import { RootState } from '../data/reducer';
import { PostsType } from '../data/posts/postsTypes';
import { postsActionCreators } from '../data/posts/postsActions';

export interface StateProps {
    posts: PostsType;
}

const mapStateToProps = (state: RootState): StateProps => ({
    posts: state.posts
});

const PostsContainer =  connect<StateProps, typeof postsActionCreators, {}, RootState>(
    mapStateToProps,
    postsActionCreators
)(Posts);

export default PostsContainer;
