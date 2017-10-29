import React from 'react';
import { shallow } from 'enzyme';

import ResultsPanel from '../ResultsPanel';
import styles from '../ResultsPanel.css';

describe('<ResultsPanel />', () => {
  it('should render without throwing errors', () => {
    const panel = shallow(<ResultsPanel />);

    expect(panel.find(`.${styles.resultsPanel}`).length).toBe(1);
  });

  it('should render children', () => {
    const panel = shallow(<ResultsPanel><div>content</div></ResultsPanel>);

    expect(panel.find(`.${styles.resultsPanel}`).contains(<div>content</div>)).toBe(true);
  });

  it('should render buttons for sorting', () => {
    const panel = shallow(<ResultsPanel sortable />);

    expect(panel.find('ButtonSwitcher').length).toBe(1);
  });
});
