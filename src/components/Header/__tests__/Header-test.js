import React from 'react';
import { shallow } from 'enzyme';

import Header from '../Header';
import styles from '../Header.css';

describe('<Header />', () => {
  it('should render without trowing error', () => {
    const header = shallow(<Header><div>Content</div></Header>);

    expect(header.find('header').hasClass(styles.header)).toBe(true);
    expect(header.find('header').contains(<div>Content</div>)).toBe(true);
  });
});