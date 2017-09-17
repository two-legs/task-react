import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';

import styles from './Page.css';

const Page = ({ route }) => ((
  <div className={styles.page}>
    {renderRoutes(route.routes)}
  </div>));

Page.propTypes = {
  route: PropTypes.object.isRequired, // eslint-disable-line
};

export default Page;
