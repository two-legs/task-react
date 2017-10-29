import React from 'react';
import { shallow } from 'enzyme';

import SearchHeader from '../SearchHeader';
import styles from '../SearchHeader.css';

describe('<SearchHeader />', () => {
  it('should render without throwing error', () => {
    const header = shallow(<SearchHeader />);

    expect(header.find('PageHeader').length).toBe(1);
  });

  it('should work search input', () => {
    const header = shallow(<SearchHeader query="search query" />);

    expect(header.find('TextInput').length).toBe(1);

    expect(header.state('query')).toEqual('search query');
    header.setState({ query: 'new query' }, () => {
      expect(header.state('query')).toEqual('new query');
    });
  });

  it('should render buttons for sotring', () => {
    const buttons = [{ id: 1, caption: 1 }, { id: 2, caption: 2 }];
    const header = shallow(<SearchHeader searchTypes={buttons} />);

    expect(header.find('ButtonSwitcher').length).toBe(1);
    expect(header.find('ButtonSwitcher').prop('buttons')).toEqual(buttons);
  });

  it('should render big search button', () => {
    const header = shallow(<SearchHeader />);

    expect(header.find('BigButton').prop('children')).toBe('Search');
  });
});