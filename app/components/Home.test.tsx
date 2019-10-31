import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { createShallow } from '@material-ui/core/test-utils';

import Home from './Home';
import PostsContainer from './PostsContainer';

Enzyme.configure({ adapter: new Adapter() });

describe('<Home />', () => {
    it('should render', () => {
        const wrapper = createShallow()(<Home />);
        expect(wrapper.find(PostsContainer)).toHaveLength(1);
    });
});
