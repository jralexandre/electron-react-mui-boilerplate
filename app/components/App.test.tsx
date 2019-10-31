import React from 'react';
import { App } from './App';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Box from '@material-ui/core/Box';
import { createShallow } from '@material-ui/core/test-utils';

Enzyme.configure({ adapter: new Adapter() });

describe('<App />', () => {
    it('should render', () => {
        const wrapper = createShallow()(<App />);
        expect(wrapper.find(Box)).toHaveLength(1);
    });
});
