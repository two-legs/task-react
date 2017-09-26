import React from 'react';
import PropTypes from 'prop-types';

import styles from './EmptyResult.css';

const EmptyResult = props => (
  <div className={styles.emptyResult}>
    {props.text || 'No films found'}
  </div>
);

export default EmptyResult;