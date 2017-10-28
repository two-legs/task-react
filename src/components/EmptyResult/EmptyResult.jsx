import React from 'react';
import PropTypes from 'prop-types';

import styles from './EmptyResult.css';

const EmptyResult = ({ text }) => (
  <div className={styles.emptyResult}>
    {text || 'No films found'}
  </div>
);

EmptyResult.propTypes = {
  text: PropTypes.string,
};

export default EmptyResult;