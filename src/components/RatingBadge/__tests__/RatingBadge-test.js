import React from 'react';
import { shallow } from 'enzyme';

import RatingBadge from '../RatingBadge';
import styles from '../RatingBadge.css';

describe('<RatingBadge />', () => {
  it('should render without throwing error', () => {
    const badge = shallow(<RatingBadge rating={10} />);

    const badgeContent = badge.find(`.${styles.badge}`);
    expect(badgeContent.length).toBe(1);
    expect(badgeContent.text()).toBe('10');
  });

  it('should pass className prop', () => {
    const badge = shallow(<RatingBadge rating={10} className="customBadge" />);
    expect(badge.find(`.${styles.badge}`).hasClass('customBadge')).toBe(true);
  });
});
