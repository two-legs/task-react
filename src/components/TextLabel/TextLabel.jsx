import React from 'react';

import classNames from 'classnames/bind';
import styles from './TextLabel.css';
const cx = classNames.bind(styles);

const TextLabel = props => (
  <span className={cx(styles.textLabel, props.size, props.className)}>
    {props.children}
  </span>
);

export default TextLabel;
