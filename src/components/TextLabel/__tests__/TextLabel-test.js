import React from 'react';
import { shallow } from 'enzyme';

import TextLabel from '../TextLabel';
import styles from '../TextLabel.css';

describe('<TextLabel />', () => {
  it('should render without throwing error', () => {
    const label = shallow(<TextLabel><span>content</span></TextLabel>);

    expect(label.find(`.${styles.textLabel}`).contains(<span>content</span>)).toBe(true);
  });

  it('should render with specified size', () => {
    expect(shallow(<TextLabel size="big" />).hasClass('big')).toBe(true);
  });

  it('should pass className prop', () => {
    expect(shallow(<TextLabel className="customClass" />).hasClass('customClass')).toBe(true);
  });
});