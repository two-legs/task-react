import React from 'react';
import PropTypes from 'prop-types';

import styles from './Header.css';

const Header = props => (
  <header className={styles.header}>
    {props.children}
  </header>
);

export default Header;
