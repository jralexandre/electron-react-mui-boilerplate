import { postsActionCreators } from './postsActions';
import { PostType, PostActionTypes } from './postsTypes';

describe('postActions', () => {
    const samplePost: PostType = {
        id: 1,
        title: 'Sample Post',
        content: "Sample Post's content"
    };

    it('addPost should create add post action', () => {
        expect(postsActionCreators.addPost(samplePost).type).toMatch(
            PostActionTypes.ADD_POST
        );
    });

    it('editPost should create edit post action', () => {
        expect(postsActionCreators.editPost(1, samplePost).type).toMatch(
            PostActionTypes.EDIT_POST
        );
    });

    it('deletePost should create delete post action', () => {
        expect(postsActionCreators.deletePost(1).type).toMatch(
            PostActionTypes.DELETE_POST
        );
    });
});
