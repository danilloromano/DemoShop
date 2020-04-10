import React from 'react';
import toJson from 'enzyme-to-json'
import { shallow } from 'enzyme';
import SideBarHeader from './SideBarHeader';

describe('SideBarHeader render test', () => {

    it('should render correctly', () => {
        const wrapper = shallow(<SideBarHeader />)
        expect(toJson(wrapper)).toMatchSnapshot()
    });

});