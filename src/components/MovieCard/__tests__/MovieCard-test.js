import React from 'react';
import { shallow } from 'enzyme';

import MovieCard from '../MovieCard';
import styles from '../MovieCard.css';

const movie = {
  posterUrl: 'http://poster',
  title: 'moive title',
  category: 'movie category',
  releaseYear: '2017',
};

describe('<MovieCard />', () => {
  it('should render without trowing error', () => {
    const movieWrapper = shallow(<MovieCard {...movie} />);

    expect(movieWrapper.find(`.${styles.card}`).length).toBe(1);
    expect(movieWrapper.find(`.${styles.title}`).first('div').text()).toBe(movie.title);
    expect(movieWrapper.find(`.${styles.category}`).text()).toBe(movie.category);
    expect(movieWrapper.find('MoviePoster').prop('url')).toBe(movie.posterUrl);
    expect(movieWrapper.find('Tag').prop('children')).toBe(movie.releaseYear);
  });
});
