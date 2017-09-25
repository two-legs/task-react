import React from 'react';
import PropTypes from 'prop-types';
import { renderRoutes } from 'react-router-config';
import Footer from '../../components/Footer/Footer';

import styles from './Page.css';

const Page = ({ route }) => ((
  <div className={styles.page}>
    {renderRoutes(route.routes)}
    <Footer />
  </div>));

Page.propTypes = {
  route: PropTypes.object.isRequired, // eslint-disable-line
};

export default Page;
