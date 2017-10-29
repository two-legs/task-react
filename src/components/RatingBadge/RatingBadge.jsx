import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import styles from './RatingBadge.css';

const RatingBadge = ({ rating, className }) => (
  <div className={cn(styles.badge, className)}>{rating}</div>
);

RatingBadge.propTypes = {
  rating: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  className: PropTypes.string,
};

export default RatingBadge;
