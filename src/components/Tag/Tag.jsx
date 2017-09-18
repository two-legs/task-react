import React from 'react';
import PropTypes from 'prop-types';

import styles from './Tag.css';

const Tag = props => (
  <div className={styles.tag}>{props.children}</div>
);

export default Tag;
