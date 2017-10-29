import React from 'react';
import { shallow } from 'enzyme';

import Tag from '../Tag';
import styles from '../Tag.css';

describe('<Tag />', () => {
  it('should render without throwing errors', () => {
    const tag = shallow(<Tag><span>content</span></Tag>);

    expect(tag.find(`.${styles.tag}`).contains(<span>content</span>)).toBe(true);
  });
});