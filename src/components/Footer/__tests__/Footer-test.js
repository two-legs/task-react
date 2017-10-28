import React from 'react';
import { mount } from 'enzyme';

import Footer from '../Footer';
import styles from '../Footer.css';

describe('<Footer />', () => {
  it('should render without throwing error', () => {
    const wrapper = mount(<Footer />);

    expect(wrapper.find('div').first().hasClass(styles.footer)).toBe(true);
  });
});
