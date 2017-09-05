import React from 'react';
import { render } from 'react-dom';
import styles from './index.css';

render(<div className={styles.content}>Hello, world!</div>,
  document.getElementById('root'),
);