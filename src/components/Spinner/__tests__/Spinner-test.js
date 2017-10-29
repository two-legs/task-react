import React from 'react';
import { shallow } from 'enzyme';

import Spinner from '../Spinner';
import styles from '../Spinner.css';

describe('<Spinner />', () => {
  it('should render without throwing error', () => {
    const spinner = shallow(<Spinner />);

    expect(spinner.find(`.${styles.spinner}`).length).toBe(1);
  });
});
