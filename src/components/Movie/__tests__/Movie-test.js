import React from 'react';
import { shallow } from 'enzyme';

import Movie from '../Movie';
import styles from '../Movie.css';

const movieRatingless = {
  posterUrl: 'http://poster',
  title: 'moive title',
  category: 'movie category',
  releaseYear: '2017',
  runtime: '1h 30m',
  summary: 'movie summary',
  director: 'movie director',
  showCast: 'movie cast',
};

describe('<Movie />', () => {
  it('should render without trowing error', () => {
    const movieWrapper = shallow(<Movie {...movieRatingless} />);

    expect(movieWrapper.find(`.${styles.movie}`).length).toBe(1);
    expect(movieWrapper.find(`h1.${styles.title}`).text()).toBe(movieRatingless.title);
    expect(movieWrapper.find(`.${styles.category}`).text()).toBe(movieRatingless.category);
    expect(movieWrapper.find(`.${styles.summary}`).text()).toBe(movieRatingless.summary);
    expect(movieWrapper.find(`.${styles.param}`).map(node => node.text())).toEqual([movieRatingless.releaseYear, movieRatingless.runtime]);
    expect(movieWrapper.find(`.${styles.addInfo}`).map(node => node.text()))
      .toEqual([`Director: ${movieRatingless.director}`, `Cast: ${movieRatingless.showCast}`]);
    expect(movieWrapper.find('MoviePoster').prop('url')).toBe(movieRatingless.posterUrl);
    expect(movieWrapper.find(`.${styles.rating}`).length).toBe(0);
  });

  it('should render movie card with rating', () => {
    const ratedMovie = { ...movieRatingless, rating: '10.0' };
    const movieWrapper = shallow(<Movie {...ratedMovie} />);

    expect(movieWrapper.find(`.${styles.rating}`).length).toBe(1);
    expect(movieWrapper.find('RatingBadge').prop('rating')).toBe(ratedMovie.rating);
  });
});
