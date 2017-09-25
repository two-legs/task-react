import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';
import MovieCard from '../MovieCard/MovieCard';

import styles from './MovieGrid.css';

const MovieGrid = props => (
  <div className={styles.grid}>
    {props.movies.length > 0 
      ? props.movies.map((movie, index) => (
        <Link to={`/film/${encodeURI(movie.title)}`} key={index}>
          <MovieCard
            title={movie.title}
            category={movie.category}
            posterUrl={movie.poster}
            releaseYear={movie.releaseYear}
          />
        </Link>),
      ) : null
    }
  </div>
);

MovieGrid.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MovieGrid;
