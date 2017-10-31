import React from 'react';
import ContentWrapper from '../ContentWrapper/ContentWrapper';
import Panel from '../Panel/Panel';
import Logo from '../Logo/Logo';

import styles from './Footer.css';

const Footer = () => (
  <div className={styles.footer}>
    <ContentWrapper>
      <Panel>
        <Logo />
      </Panel>
    </ContentWrapper>
  </div>
);

export default Footer;