import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { createShallow } from '@material-ui/core/test-utils';
import { PostsType } from '../data/posts/postsTypes';

import Posts from './Posts';
import { Typography, Fab } from '@material-ui/core';
import Post from './Post';

Enzyme.configure({ adapter: new Adapter() });

describe('<Posts />', () => {
    const setup = (
        posts: PostsType
    ): {
        wrapper: Enzyme.ShallowWrapper;
        addPost: jest.Mock;
        editPost: jest.Mock;
        deletePost: jest.Mock;
    } => {
        const addPost = jest.fn();
        const editPost = jest.fn();
        const deletePost = jest.fn();

        const props = {
            posts,
            addPost,
            editPost,
            deletePost
        };

        const wrapper = createShallow()(<Posts {...props} />);
        return { wrapper, addPost, editPost, deletePost };
    };

    const basePosts: PostsType = { byId: {}, allIds: [], newPostId: 1 };

    it('should render with no posts', () => {
        const { wrapper } = setup(basePosts);

        expect(wrapper.find(Typography).text()).toBe(
            'There are no posts created.'
        );
    });

    it('should render with posts', () => {
        const samplePost = {
            id: 1,
            title: 'Test post 1',
            content: 'Test content 1'
        };
        const posts: PostsType = {
            byId: {
                1: samplePost
            },
            allIds: [1],
            newPostId: 2
        };
        const { wrapper } = setup(posts);

        expect(wrapper.find(Post)).toHaveLength(1);
        expect(
            wrapper
                .find(Post)
                .at(0)
                .prop('post')
        ).toEqual(samplePost);
    });

    it('can create post and save it', () => {
        const { wrapper, addPost } = setup(basePosts);
        const samplePost = {
            id: -1,
            title: 'New Post',
            content: "New Post's content"
        };
        wrapper.find(Fab).simulate('click');

        expect(
            wrapper
                .find(Post)
                .at(0)
                .prop('editing')
        ).toBe(true);

        const onSave = wrapper
            .find(Post)
            .at(0)
            .prop('onSave');

        expect(onSave).toBeDefined();
        if (onSave !== undefined) onSave(samplePost);
        expect(addPost.mock.calls).toHaveLength(1);
        expect(addPost.mock.calls[0][0]).toEqual(samplePost);

        // Should return to post list without actually saving during test
        expect(wrapper.find(Typography).text()).toBe(
            'There are no posts created.'
        );
    });

    it('can cancel creating a post', () => {
        const { wrapper } = setup(basePosts);
        wrapper.find(Fab).simulate('click');

        expect(
            wrapper
                .find(Post)
                .at(0)
                .prop('editing')
        ).toBe(true);

        const onCancel = wrapper
            .find(Post)
            .at(0)
            .prop('onCancel');

        expect(onCancel).toBeDefined();
        if (onCancel !== undefined) onCancel();

        expect(wrapper.find(Typography).text()).toBe(
            'There are no posts created.'
        );
    });

    it('can edit a post', () => {
        const samplePost = {
            id: 1,
            title: 'Sample Post',
            content: "Sample Post's content"
        };

        const posts: PostsType = {
            byId: {
                1: samplePost
            },
            allIds: [1],
            newPostId: 2
        };

        const { wrapper, editPost } = setup(posts);

        const onSave = wrapper
            .find(Post)
            .at(0)
            .prop('onSave');

        expect(onSave).toBeDefined();
        if (onSave !== undefined) onSave(samplePost);

        expect(editPost.mock.calls).toHaveLength(1);
        expect(editPost.mock.calls[0][0]).toBe(samplePost.id);
        expect(editPost.mock.calls[0][1]).toEqual(samplePost);
    });

    it('can delete a post', () => {
        const samplePost = {
            id: 1,
            title: 'Sample Post',
            content: "Sample Post's content"
        };

        const posts: PostsType = {
            byId: {
                1: samplePost
            },
            allIds: [1],
            newPostId: 2
        };

        const { wrapper, deletePost } = setup(posts);

        const onDelete = wrapper
            .find(Post)
            .at(0)
            .prop('onDelete');

        expect(onDelete).toBeDefined();
        if (onDelete !== undefined) onDelete(samplePost);

        expect(deletePost.mock.calls).toHaveLength(1);
        expect(deletePost.mock.calls[0][0]).toBe(samplePost.id);
    });
});
