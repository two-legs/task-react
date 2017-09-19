import React from 'react';
import PropTypes from 'prop-types';

import styles from './RatingBadge.css';
import cn from 'classnames';

const RatingBadge = ({ rating, className }) => (
  <div className={cn(styles.badge, className)}>{rating}</div>
);

RatingBadge.propTypes = {
  rating: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default RatingBadge;
