import React from 'react';
import { shallow } from 'enzyme';

import { SearchPage } from '../SearchPage';

describe('<SearchPage />', () => {
  it('should render without throwing error', () => {
    const page = shallow(
      <SearchPage
        query=""
        searchBy={'title'}
        films={[]}
        searchTypes={[{ id: 1, label: 1 }]}
        sortFields={[{ id: 1, label: 1 }]}
        onSearch={() => true}
        onSearchTypeChange={() => true}
        onSortChange={() => true}
        history={{}}
        match={{ params: {} }}
      />
    );

    expect(page.find('SearchHeader').length).toBe(1);
    expect(page.find('ResultsPanel').length).toBe(1);
  });

  it('should render spinner in pending state', () => {
    const page = shallow(
      <SearchPage
        query=""
        searchBy={'title'}
        films={[]}
        searchTypes={[{ id: 1, label: 1 }]}
        sortFields={[{ id: 1, label: 1 }]}
        onSearch={() => true}
        onSearchTypeChange={() => true}
        onSortChange={() => true}
        history={{}}
        match={{ params: {} }}
        isPending
      />
    );

    expect(page.find('Spinner').length).toBe(1);
  });

  it('should render empty result', () => {
    const page = shallow(
      <SearchPage
        query=""
        searchBy={'title'}
        films={[]}
        searchTypes={[{ id: 1, label: 1 }]}
        sortFields={[{ id: 1, label: 1 }]}
        onSearch={() => true}
        onSearchTypeChange={() => true}
        onSortChange={() => true}
        history={{}}
        match={{ params: {} }}
      />
    );

    expect(page.find('EmptyResult').length).toBe(1);
  });


  it('should render results grid', () => {
    const page = shallow(
      <SearchPage
        query=""
        searchBy={'title'}
        films={[{}, {}]}
        searchTypes={[{ id: 1, label: 1 }]}
        sortFields={[{ id: 1, label: 1 }]}
        onSearch={() => true}
        onSearchTypeChange={() => true}
        onSortChange={() => true}
        history={{}}
        match={{ params: {} }}
      />
    );

    expect(page.find('MovieGrid').length).toBe(1);
  });
});
