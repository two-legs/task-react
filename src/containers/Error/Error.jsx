import React from 'react';
import { connect } from 'react-redux';
import styles from './Error.css';

const Error = ({ message }) => message
  ? (
    <div className={styles.error}>
      {message}
    </div>
  ) : null;

export default connect(state => ({ message: state.error.message }))(Error);