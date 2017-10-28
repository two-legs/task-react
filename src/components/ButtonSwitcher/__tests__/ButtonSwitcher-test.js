import React from 'react';
import { shallow } from 'enzyme';

import ButtonSwitcher from '../ButtonSwitcher';

const buttons = [{ id: 'one', caption: 'one' }, { id: 'two', caption: 'two' }];

describe('<ButtonSwitcher />', () => {
  it('should render without trowing error', () => {
    const switcher = shallow(<ButtonSwitcher buttons={buttons} />);
    expect(switcher.find('Button').length).toBe(2);
  });

  it('should render with selected type', () => {
    const switcher = shallow(<ButtonSwitcher buttons={buttons} buttonType="basic" />);
    expect(switcher.find('Button').filter({ type: 'basic' }).length).toBe(2);
  });

  it('should be active first button', () => {
    const switcher = shallow(<ButtonSwitcher buttons={buttons} />);
    expect(switcher.find('Button').first().prop('primary')).toBe(true);
    expect(switcher.state('activeButtonId')).toBe('one');
  });

  it('simulates click event', () => {
    const mockHandler = jest.fn();
    const switcher = shallow(<ButtonSwitcher buttons={buttons} onSwitch={mockHandler} />);

    expect(switcher.find('Button').last().simulate('click'));
    expect(mockHandler.mock.calls.length).toBe(1);
    expect(mockHandler.mock.calls[0][0]).toEqual(buttons[1]);
    expect(switcher.find('Button').last().prop('primary')).toBe(true);
    expect(switcher.state('activeButtonId')).toBe('two');
  });
});