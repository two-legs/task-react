import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';

import classNames from 'classnames/bind';
import styles from './App.css';

const cx = classNames.bind(styles);

const App = ({ route }) => ((
  <div className={styles.app}>
    <ul style={{ listStyleType: 'none', padding: 0 }}>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/about">About</Link></li>
    </ul>

    {renderRoutes(route.routes)}
  </div>));

App.propTypes = {
  route: PropTypes.object.isRequired, // eslint-disable-line
};

export default App;
