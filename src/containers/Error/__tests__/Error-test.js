import React from 'react';
import { shallow } from 'enzyme';

import { Error } from '../Error';
import styles from '../Error.css';

describe('<Error />', () => {
  it('should render without throwing error', () => {
    const message = 'error message';
    const error = shallow(<Error message={message} />);

    expect(error.find(`.${styles.error}`).text()).toBe(message);
  });
});