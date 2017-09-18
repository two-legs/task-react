import React from 'react';
import PropTypes from 'prop-types';

import MoviePoster from '../MoviePoster/MoviePoster';
import Tag from '../Tag/Tag';

import styles from './Movie.css';

const MovieCard = props => (
  <div className={styles.movie}>
    <MoviePoster url={props.posterUrl} className={styles.cardPoster} />
    <div className={styles.description}>
      <div className={styles.title}>
        <h1>{props.title}</h1>
        <div className={styles.category}>{props.category}</div>
        <div className={styles.params}>
          <div className={styles.param}>
            {props.releaseYear}
          </div>
          <div className={styles.param}>
            {props.runtime}
          </div>
        </div>
        <div className={styles.summary}>
          {props.summary}
        </div>
        <div className={styles.addInfo}>
          {`Director: ${props.director}`}
        </div>
        <div className={styles.addInfo}>
          {`Cast: ${props.showCast}`}
        </div>
      </div>
    </div>
  </div>
);

MovieCard.propTypes = {
  posterUrl: PropTypes.string,
  title: PropTypes.string,
  category: PropTypes.string,
  releaseYear: PropTypes.string,
};

export default MovieCard;