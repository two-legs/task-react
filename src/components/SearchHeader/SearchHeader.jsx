import React, { PureComponent } from 'react';
import PageHeader from '../PageHeader/PageHeader';
import { BigButton } from '../Button/Button';
import ButtonSwitcher from '../ButtonSwitcher/ButtonSwitcher';
import TextInput from '../TextInput/TextInput';
import Panel, { PanelGroup } from '../Panel/Panel';
import TextLabel from '../TextLabel/TextLabel';

import styles from './SearchHeader.css';

export default class SearchHeader extends PureComponent {
  constructor(props) {
    super(props);

    this.state = { query: this.props.query };
  }

  handleChange = (value) => {
    this.setState({ query: value });
  };

  handleSearchClick = () => {
    if (this.props.onSearchClick) {
      this.props.onSearchClick(this.state.query);
    }
  };

  render() {
    return (
      <PageHeader>
        <div className={styles.searchForm}>
          <TextLabel size="big" className={styles.searchLabel}>Find your movie</TextLabel>
          <TextInput
            value={decodeURI(this.state.query)}
            onChange={this.handleChange}
            onEnter={this.handleSearchClick}
          />
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
            <BigButton type="primary" onClick={this.handleSearchClick}>Search</BigButton>
          </PanelGroup>
        </Panel>
      </PageHeader>
    );
  }
}