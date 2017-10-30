import React from 'react';
import { shallow, mount } from 'enzyme';

import TextInput from '../TextInput';

describe('<TextInput />', () => {
  it('should render without trowing error', () => {
    const input = shallow(<TextInput />);

    expect(input.find('input').length).toBe(1);
  });

  it('should initialize with value from prop', () => {
    const value = 'test';
    const input = shallow(<TextInput value={value} />);

    expect(input.find('input').prop('value')).toBe(value);
  });

  it('should call onChange handler', () => {
    const mockHandler = jest.fn();
    const input = shallow(<TextInput onChange={mockHandler} />);

    const field = input.find('input');
    field.simulate('focus');
    field.simulate('change', { target: { value: 'changed' } });

    expect(input.find('input').prop('value')).toBe('changed');
    expect(mockHandler.mock.calls[0][0]).toBe('changed');
  });

  // it('should call onEnter handler', () => {
  //   const mockHandler = jest.fn();
  //   const input = mount(<TextInput onEnter={mockHandler} value="value" />);
  //
  //   const field = input.find('input');
  //   field.simulate('focus');
  //   field.simulate('keyDown', {
  //     target: {
  //       keyCode: 13,
  //       which: 13,
  //       key: 'Enter',
  //     },
  //   });
  //
  //   expect(mockHandler.mock.calls[0][0]).toBe('value');
  // });
});
