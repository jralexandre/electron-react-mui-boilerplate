import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import PostsContainer from './PostsContainer';
import configureStore from '../data/store';
import { createMount } from '@material-ui/core/test-utils';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router';
import { Typography } from '@material-ui/core';

Enzyme.configure({ adapter: new Adapter() });

describe('<PostsContainer />', () => {

    it ('should render', () => {
        const store = configureStore({
            posts: { allIds: [], byId: {}, newPostId: 1 }
        });

        const wrapper = createMount()(
            <Provider store={store}>
                <MemoryRouter>
                    <PostsContainer />
                </MemoryRouter>
            </Provider>
        );

        expect(wrapper.find(Typography).text()).toBe('There are no posts created.');
    });
});
