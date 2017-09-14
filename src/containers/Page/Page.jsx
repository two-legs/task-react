import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';

import classNames from 'classnames/bind';
import styles from './Page.css';

const cx = classNames.bind(styles);

const Page = ({ route }) => ((
  <div className={cx('page')}>
    <ul style={{ listStyleType: 'none', padding: 0 }}>
      <li><Link to="/">Articles</Link></li>
      <li><Link to="/about">About</Link></li>
    </ul>

    {renderRoutes(route.routes)}
  </div>));

Page.propTypes = {
  route: PropTypes.object.isRequired, // eslint-disable-line
};

export default Page;
