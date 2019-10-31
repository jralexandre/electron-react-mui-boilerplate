import configureStore from './store';

describe('store', () => {
    it('should handle store creation', () => {
        const store = configureStore({
            posts: { allIds: [], byId: {}, newPostId: 1 }
        });

        expect(store.getState().posts.newPostId).toBe(1);
    });
});
