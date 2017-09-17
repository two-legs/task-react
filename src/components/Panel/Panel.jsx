import React from 'react';

import styles from './Panel.css';
import cn from 'classnames';

export default props => (
  <div className={cn(styles.panel, props.className)}>
    {props.children}
  </div>
);

const PanelGroup = props => (
  <div className={styles.panelGroup}>
    {props.children}
  </div>
);

export { PanelGroup };