import React from 'react';
import PropTypes from 'prop-types';

import cn from 'classnames';
import styles from './MoviePoster.css';

const MoviePoster = props => (
  <div
    className={cn(styles.cover, props.className)}
    style={{ backgroundImage: `url('${props.url}')` }}
  />
);

MoviePoster.propTypes = {
  url: PropTypes.string.isRequired,
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
};

export default MoviePoster;
