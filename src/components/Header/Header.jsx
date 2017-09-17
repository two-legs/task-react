import React from 'react';
import PropTypes from 'prop-types';

import styles from './Header.css';

const Header = props => (
  <div className={styles.header}>
    {props.children}
  </div>
);

export default Header;
