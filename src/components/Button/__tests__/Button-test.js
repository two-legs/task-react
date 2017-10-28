import React from 'react';
import { shallow } from 'enzyme';

import Button, { BigButton, PrimaryButton } from '../Button';
import styles from '../Button.css';

describe('<Button />', () => {
  beforeAll(() => {

  });

  it('should render without throwing error', () => {
    const button = shallow(<Button>button</Button>);
    expect(button.find('button').length).toBe(1);
    expect(button.find('button').text()).toBe('button');
  });

  it('should pass props to className', () => {
    const button = shallow(
      <Button size="big" type="basic" primary className="awesomeButton">
        button
      </Button>);

    expect(button.find('button').hasClass(styles.big)).toBe(true);
    expect(button.find('button').hasClass(styles.basic)).toBe(true);
    expect(button.find('button').hasClass(styles.primary)).toBe(true);
    expect(button.find('button').hasClass('awesomeButton')).toBe(true);
  });

  it('simulates click event', () => {
    const mockHandler = jest.fn();
    const button = shallow(<Button onClick={mockHandler}>button</Button>);

    button.find('button').simulate('click');
    expect(mockHandler.mock.calls.length).toBe(1);
  });

  describe('<BigButton />', () => {
    it('should render without trowing error', () => {
      const bigButton = shallow(<BigButton />);
      expect(bigButton.find(Button).length).toBe(1);
      expect(bigButton.find(Button).prop('size')).toEqual('big');
    });

    it('should pass props to button', () => {
      expect(shallow(<BigButton primary />).find(Button).prop('primary')).toBe(true);
    });
  });

  describe('<PrimaryButton />', () => {
    it('should render without trowing error', () => {
      const primaryButton = shallow(<PrimaryButton />);
      expect(primaryButton.find(Button).length).toBe(1);
      expect(primaryButton.find(Button).prop('primary')).toEqual(true);
      expect(shallow(<PrimaryButton size="big" />).find(Button).prop('size')).toBe('big');
    });

    it('should pass props to button', () => {
      expect(shallow(<PrimaryButton primary />).find(Button).prop('primary')).toBe(true);
    });
  });
});

