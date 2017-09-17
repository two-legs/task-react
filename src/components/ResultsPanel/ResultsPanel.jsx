import React from 'react';
import Panel, { PanelGroup } from '../Panel/Panel';
import ButtonSwitcher from '../ButtonSwitcher/ButtonSwitcher';
import ContentWrapper from '../ContentWrapper/ContentWrapper';

import styles from './ResultsPanel.css';

const ResultsPanel = props => (
  <div className={styles.resultsPanel}>
    <ContentWrapper>
      <Panel>
        <PanelGroup>{props.children}</PanelGroup>
        {props.sortable
          ? <PanelGroup>
            <span className={styles.sortingLabel}>Sorting by</span>
            <ButtonSwitcher
              buttons={[{ id: 'releaseDate', caption: 'release date' }, { id: 'rating', caption: 'rating' }]}
              onSwitch={props.onSortChange}
              buttonType="basic"
            />
          </PanelGroup>
          : null
        }
      </Panel>
    </ContentWrapper>
  </div>
);

export default ResultsPanel;
