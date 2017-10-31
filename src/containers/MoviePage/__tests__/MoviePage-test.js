import React from 'react';
import { shallow } from 'enzyme';

import { MoviePage } from '../MoviePage';

const film = {
  id: 1,
  posterUrl: 'http://poster',
  title: 'moive title',
  category: 'movie category',
  releaseYear: '2017',
  runtime: '1h 30m',
  summary: 'movie summary',
  director: 'movie director',
  showCast: 'movie cast',
};

describe('<MoviePage />', () => {
  it('should render without throwing error', () => {
    const page = shallow(<MoviePage film={film} onFetch={() => true} match={{ params: {} }} />);

    expect(page.find('MovieHeader').length).toBe(1);
    expect(page.find('MovieGrid').length).toBe(1);
  });

  it('should fetch a movie data', () => {
    const mockFetch = jest.fn();
    const title = 'test title';
    const page = shallow(<MoviePage film={film} onFetch={mockFetch} match={{ params: { title } }} />);

    expect(mockFetch.mock.calls[0][0]).toBe(title);
  });

  it('should render spinner', () => {
    const page = shallow(<MoviePage film={film} onFetch={() => true} match={{ params: {} }} idPending />);

    expect(page.find('Spinner').length).toBe(1);
  });
});
