import React from 'react';
import {shallow} from 'enzyme';
import Component from './index';

describe('pages > Homepage', () => {
  test('renders the essentials', () => {
    const wrapper = shallow(<Component />);
    expect(wrapper).toMatchSnapshot();
  });
});
