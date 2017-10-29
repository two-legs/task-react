import React from 'react';
import { shallow } from 'enzyme';

import Logo from '../Logo';
import styles from '../Logo.css';

describe('<Logo />', () => {
  it('should render without trowing error', () => {
    const logo = shallow(<Logo />);

    expect(logo.find(`.${styles.logo}`).length).toBe(1);
  });
});
