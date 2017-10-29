import React from 'react';
import { shallow } from 'enzyme';

import TextInput from '../TextInput';

describe('<TextInput />', () => {
  it('should render without trowing error', () => {
    const input = shallow(<TextInput />);

    expect(input.find('input').length).toBe(1);
  });
});