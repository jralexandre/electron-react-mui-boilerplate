import createRootReducer from './reducer';
import { createStore } from 'redux';
import { PostType } from './posts/postsTypes';
import { postsActionCreators } from './posts/postsActions';

describe('Root reducer', () => {
    it('should handle post creation', () => {
        const rootReducer = createRootReducer();

        const store = createStore(rootReducer);

        const post: PostType = { id: 1, title: 'Sample Post', content: "Sample post's content" };

        const action = postsActionCreators.addPost(post);
        store.dispatch(action);

        expect(store.getState().posts.byId[1]).toEqual(post);
    });
});
