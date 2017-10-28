import React from 'react';
import { shallow } from 'enzyme';

import EmptyResult from '../EmptyResult';

describe('<EmptyResult />', () => {
  it('should render without throwing error', () => {
    const wrapper = shallow(<EmptyResult />);

    expect(wrapper.find('div').text()).toBe('No films found');
  });

  it('should render with custom text', () => {
    const wrapper = shallow(<EmptyResult text="text" />);

    expect(wrapper.find('div').text()).toBe('text');
  });
});
