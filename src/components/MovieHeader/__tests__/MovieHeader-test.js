import React from 'react';
import { shallow, render } from 'enzyme';

import MovieHeader from '../MovieHeader';

const movie = {
  posterUrl: 'http://poster',
  title: 'moive title',
  category: 'movie category',
  releaseYear: '2017',
  runtime: '1h 30m',
  summary: 'movie summary',
  director: 'movie director',
  showCast: 'movie cast',
};

describe('<MovieHeader />', () => {
  it('should render without throwing error', () => {
    const wrapper = shallow(<MovieHeader {...movie} />);

    expect(wrapper.find('Movie').length).toBe(1);
  });
});

