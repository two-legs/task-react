import React from 'react';
import PropTypes from 'prop-types';

import MoviePoster from '../MoviePoster/MoviePoster';
import Tag from '../Tag/Tag';

import styles from './MovieCard.css';

const MovieCard = props => (
  <div className={styles.card}>
    <MoviePoster url={props.posterUrl} className={styles.cardPoster} />
    <div className={styles.description}>
      <div className={styles.titleContainer}>
        <div className={styles.title}>{props.title}</div>
        <div className={styles.releaseYear}>
          <Tag>{props.releaseYear}</Tag>
        </div>
      </div>
      <div className={styles.category}>
        {props.category}
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
