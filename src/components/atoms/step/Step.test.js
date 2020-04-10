import React from 'react';
import toJson from 'enzyme-to-json'
import { shallow } from 'enzyme';
import Step from './Step';

describe('Step render test', () => {

    const defaultProps = {
        currentStep: 1
    }

    it('Step should render correctly', () => {
        const wrapper = shallow(<Step props={defaultProps}/>)
        expect(toJson(wrapper)).toMatchSnapshot()
    });

});