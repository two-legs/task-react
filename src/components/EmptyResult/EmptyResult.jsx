import React from 'react';
import PropTypes from 'prop-types';

import styles from './EmptyResult.css';

const EmptyResult = () => (
  <div className={styles.emptyResult}>
    No films found
  </div>
);

export default EmptyResult;