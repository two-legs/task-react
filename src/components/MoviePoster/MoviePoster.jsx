import React from 'react';
import PropTypes from 'prop-types';

import cn from 'classnames';
import styles from './MoviePoster.css';

const MoviePoster = ({ url, className }) => (
  <div
    className={cn(styles.cover, className)}
    style={{ backgroundImage: url ? `url('${url}')` : null }}
  />
);

MoviePoster.propTypes = {
  url: PropTypes.string,
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
};

export default MoviePoster;
