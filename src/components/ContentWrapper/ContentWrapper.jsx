import React from 'react';

import styles from './ContentWrapper.css';

const ContentWrapper = props => (
  <div className={styles.wrapper}>
    {props.children}
  </div>
);

export default ContentWrapper;
