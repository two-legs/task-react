import React from 'react';
import { shallow } from 'enzyme';

import MoviePoster from '../MoviePoster';
import styles from '../MoviePoster.css';

describe('<MoviePoster />', () => {
  it('should render without throwing error', () => {
    const url = 'http://url/img.png';
    const cover = shallow(<MoviePoster url={url} />);

    const coverBlock = cover.find(`.${styles.cover}`);
    expect(coverBlock.length).toBe(1);
    expect(coverBlock.prop('style')).toEqual({ backgroundImage: `url('${url}')` });
  });

  it('should pass className prop', () => {
    const url = 'http://url/img.png';
    const cover = shallow(<MoviePoster url={url} className="awesomePoster" />);

    expect(cover.find(`.${styles.cover}`).hasClass('awesomePoster')).toBe(true);
  });
});