import React from 'react';
import Header from '../Header/Header';
import ContentWrapper from '../ContentWrapper/ContentWrapper';
import Panel, { PanelGroup } from '../Panel/Panel';
import Logo from '../Logo/Logo';

const PageHeader = props => (
  <Header>
    <ContentWrapper>
      <Panel>
        <PanelGroup>
          <Logo />
        </PanelGroup>
        {props.buttons &&
          <PanelGroup>
            {props.buttons}
          </PanelGroup>
        }
      </Panel>
      {props.children}
    </ContentWrapper>
  </Header>
);

export default PageHeader;
