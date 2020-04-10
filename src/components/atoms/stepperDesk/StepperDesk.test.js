import React from 'react';
import toJson from 'enzyme-to-json'
import { shallow } from 'enzyme';
import StepperDesk from './StepperDesk';

describe('StepperDesk render test', () => {

    it('should render correctly', () => {
        const wrapper = shallow(<StepperDesk />)
        expect(toJson(wrapper)).toMatchSnapshot()
    });

});