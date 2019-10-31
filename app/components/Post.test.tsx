import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Post from './Post';
import { createShallow } from '@material-ui/core/test-utils';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import { PostType } from '../data/posts/postsTypes';

Enzyme.configure({ adapter: new Adapter() });

describe('<Post />', () => {
    it('should render without set props', () => {
        const wrapper = createShallow()(<Post />);
        expect(wrapper.find(Paper)).toHaveLength(1);
    });

    it('should handle edit button', () => {
        const wrapper = createShallow()(<Post />);
        wrapper
            .find(Button)
            .at(0)
            .simulate('click');
        expect(wrapper.find('form')).toHaveLength(1);
    });

    it('should handle editing prop', () => {
        const wrapper = createShallow()(<Post editing />);
        expect(wrapper.find('form')).toHaveLength(1);
    });

    it('should handle form field changing', () => {
        const wrapper = createShallow()(<Post editing />);

        wrapper
            .find(TextField)
            .at(0)
            .simulate('change', {
                target: { name: 'title', value: 'Testing title' }
            });
        wrapper
            .find(TextField)
            .at(1)
            .simulate('change', {
                target: { name: 'content', value: 'Testing content' }
            });

        expect(
            wrapper
                .find(TextField)
                .at(0)
                .prop('value')
        ).toBe('Testing title');
        expect(
            wrapper
                .find(TextField)
                .at(1)
                .prop('value')
        ).toBe('Testing content');
    });

    it('should handle saving', () => {
        const onSave = jest.fn<boolean, PostType[]>(() => false);
        const samplePost: PostType = {
            id: 1,
            title: 'Sample post',
            content: 'Sample content'
        };

        const wrapper = createShallow()(
            <Post onSave={onSave} post={samplePost} editing />
        );

        wrapper.find('form').simulate('submit', { preventDefault: () => {} });
        expect(onSave.mock.calls).toHaveLength(1);
        expect(onSave.mock.calls[0][0]).toEqual(samplePost);
    });

    it('should handle save if onSave is not set', () => {
        const wrapper = createShallow()(<Post editing />);
        wrapper.find('form').simulate('submit', { preventDefault: () => {} });
        expect(wrapper.find('form')).toHaveLength(1);
    });

    it('should handle deleting', () => {
        const onDelete = jest.fn<boolean, PostType[]>(() => false);
        const samplePost: PostType = {
            id: 1,
            title: 'Sample post',
            content: 'Sample content'
        };

        const wrapper = createShallow()(
            <Post onDelete={onDelete} post={samplePost} />
        );

        wrapper
            .find(Button)
            .at(1)
            .simulate('click');
        expect(onDelete.mock.calls).toHaveLength(1);
        expect(onDelete.mock.calls[0][0]).toEqual(samplePost);
    });

    it('should handle delete if onDelete is not set', () => {
        const wrapper = createShallow()(<Post />);
        wrapper
            .find(Button)
            .at(1)
            .simulate('click');
        expect(wrapper.find(Paper)).toHaveLength(1);
    });

    it('should handle onCancel prop', () => {
        const onCancel = jest.fn();
        const wrapper = createShallow()(<Post editing onCancel={onCancel} />);

        wrapper
            .find(Button)
            .at(1)
            .simulate('click');

        expect(onCancel.mock.calls).toHaveLength(1);
    });

    it('should handle canceling', () => {
        const samplePost: PostType = {
            id: 1,
            title: 'Sample post',
            content: 'Sample content'
        };

        const wrapper = createShallow()(<Post editing post={samplePost} />);

        wrapper
            .find(Button)
            .at(1)
            .simulate('click');

        expect(wrapper.find('form')).toHaveLength(0);
        expect(
            wrapper
                .find(Typography)
                .at(0)
                .text()
        ).toBe('Sample post');
    });
});
