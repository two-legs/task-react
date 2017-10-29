import React from 'react';
import { shallow } from 'enzyme';

import MovieGrid from '../MovieGrid';
import styles from '../MovieGrid.css';

const gridData = [
  { posterUrl: 'http://poster',
    title: 'moive title 1',
    category: 'movie category',
    releaseYear: '2017',
  },
  {
    posterUrl: 'http://poster',
    title: 'moive title 2',
    category: 'movie category',
    releaseYear: '2017',
  },
  {
    posterUrl: 'http://poster',
    title: 'moive title 3',
    category: 'movie category',
    releaseYear: '2017',
  },
];


describe('<MovieGrid />', () => {
  it('should render without throwing error', () => {
    const grid = shallow(<MovieGrid movies={gridData} />);

    expect(grid.find(`.${styles.grid}`).length).toBe(1);
    expect(grid.find('MovieCard').length).toBe(3);
  });

  it('should render without error if list is empty', () => {
    const grid = shallow(<MovieGrid movies={[]} />);

    expect(grid.find(`.${styles.grid}`).children().isEmpty()).toBe(true);
  });

  it('should render correct links', () => {
    const grid = shallow(<MovieGrid movies={gridData} />);

    const expectedLinks = gridData.map(item => `/film/${encodeURI(item.title)}`);
    expect(grid.find('Link').map(link => link.prop('to'))).toEqual(expectedLinks);
  });
});