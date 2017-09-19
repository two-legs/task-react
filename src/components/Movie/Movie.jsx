import React from 'react';
import PropTypes from 'prop-types';

import MoviePoster from '../MoviePoster/MoviePoster';
import RatingBadge from '../RatingBadge/RatingBadge';

import styles from './Movie.css';

const MovieCard = props => (
  <div className={styles.movie}>
    <MoviePoster url={props.posterUrl} className={styles.cardPoster} />
    <div className={styles.description}>
      <div>
        <div className={styles.titleBlock}>
          <h1 className={styles.title}>{props.title}</h1>
          <RatingBadge rating={props.rating} className={styles.rating} />
        </div>
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
  runtime: PropTypes.string,
  summary: PropTypes.string,
  director: PropTypes.string,
  showCast: PropTypes.string,
  rating: PropTypes.string,
};

export default MovieCard;
