import React from 'react';
import PageHeader from '../PageHeader/PageHeader';
import { BigButton } from '../Button/Button';
import ButtonSwitcher from '../ButtonSwitcher/ButtonSwitcher';
import TextInput from '../TextInput/TextInput';
import Panel, { PanelGroup } from '../Panel/Panel';
import TextLabel from '../TextLabel/TextLabel';

import styles from './SearchHeader.css';

export default props => (
  <PageHeader>
    <div className={styles.searchForm}>
      <TextLabel size="big" className={styles.searchLabel}>Find your movie</TextLabel>
      <TextInput />
    </div>
    <Panel>
      <PanelGroup>
        <TextLabel>Search by</TextLabel>
        <ButtonSwitcher
          buttons={[{ id: 'title', caption: 'Title' }, { id: 'director', caption: 'Director' }]}
          onSwitch={button => console.log(button)}
        />
      </PanelGroup>
      <PanelGroup>
        <BigButton type="primary">Search</BigButton>
      </PanelGroup>
    </Panel>
  </PageHeader>
);
