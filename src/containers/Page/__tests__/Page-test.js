import React from 'react';
import { shallow } from 'enzyme';

import Page from '../Page';
import styles from '../Page.css';

describe('<Page />', () => {
  it('should render without throwing error', () => {
    const page = shallow(<Page route={{}} />);

    expect(page.find(`.${styles.page}`).length).toBe(1);
  });

  it('should render page footer', () => {
    const page = shallow(<Page route={{}} />);

    expect(page.find('Footer').length).toBe(1);
  });
});
