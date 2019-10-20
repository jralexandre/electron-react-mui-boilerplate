import posts from './postsReducer';
import { PostsType, PostActionTypes } from './postsTypes';

describe('postsReducer', () => {
    const sampleState: PostsType = {
        byId: {
            1: { id: 1, title: 'Sample Post', content: "Sample post's content" }
        },
        allIds: [1],
        newPostId: 2
    };

    it('should handle ADD_POST', () => {
        const newState = posts(sampleState, {
            type: PostActionTypes.ADD_POST,
            data: { id: -1, title: 'Added post', content: 'Dummy' }
        });

        expect(newState.allIds).toHaveLength(2);
        expect(newState.allIds).toContain(2);
        expect(newState.byId[2]).toEqual({
            id: 2,
            title: 'Added post',
            content: 'Dummy'
        });
        expect(newState.newPostId).toBe(3);
    });

    it('should handle EDIT_POST', () => {
        const newState = posts(sampleState, {
            type: PostActionTypes.EDIT_POST,
            id: 1,
            data: { id: 2, title: 'Edited post', content: 'Edited content' }
        });

        expect(newState.allIds).toHaveLength(1);
        expect(newState.byId[1]).toEqual({
            id: 1, // id should not be changed
            title: 'Edited post',
            content: 'Edited content'
        });
    });

    it('should handle DELETE_POST', () => {
        const newState = posts(sampleState, {
            type: PostActionTypes.DELETE_POST,
            id: 1
        });

        expect(newState.allIds).toHaveLength(0);
        expect(Object.entries(newState.byId)).toHaveLength(0);
    });

    it('should handle custom action', () => {
        const newState = posts(sampleState, { type: '' });

        expect(newState).toEqual(sampleState);
    });

    it('should handle initial state', () => {
        expect(posts(undefined, { type: '' })).toMatchSnapshot();
    });

    it('should not edit non existing post', () => {
        const newState = posts(sampleState, {
            type: PostActionTypes.EDIT_POST,
            id: 2,
            data: { id: 2, title: 'Invalid', content: 'Invalid' }
        });

        expect(newState.allIds).not.toContain(2);
        expect(Object.values(newState.byId)).not.toContain(
            expect.objectContaining({ title: 'Invalid' })
        );
    });

    it('should not delete non existing post', () => {
        const newState = posts(sampleState, {
            type: PostActionTypes.DELETE_POST,
            id: 2
        });

        expect(newState.allIds).toHaveLength(1);
        expect(newState.byId[1]).not.toBeUndefined();
    });
});
