import { connect } from 'react-redux';
import Posts from './Posts';
import { Dispatch, bindActionCreators, ActionCreatorsMapObject } from 'redux';
import { RootState } from '../data/reducer';
import { PostsType, PostAction } from '../data/posts/postsTypes';
import { postsActionCreators } from '../data/posts/postsActions';

type StateProps = { posts: PostsType };

const mapStateToProps = (state: RootState): StateProps => ({
    posts: state.posts
});

const mapDispatchToProps = (
    dispatch: Dispatch
): ActionCreatorsMapObject<PostAction> =>
    bindActionCreators(
        postsActionCreators,
        dispatch
    );

export type ConnectedProps = StateProps & ActionCreatorsMapObject<PostAction>;

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Posts);
