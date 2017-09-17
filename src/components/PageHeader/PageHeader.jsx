import React from 'react';
import Header from '../Header/Header';
import ContentWrapper from '../ContentWrapper/ContentWrapper';
import Panel, { PanelGroup } from '../Panel/Panel';
import Logo from '../Logo/Logo';

export default props => (
  <Header>
    <ContentWrapper>
      <Panel>
        <PanelGroup>
          <Logo />
        </PanelGroup>
      </Panel>
      {props.children}
    </ContentWrapper>
  </Header>
);
