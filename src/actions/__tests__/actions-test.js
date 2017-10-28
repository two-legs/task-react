import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import * as types from '../actionTypes';
import * as actions from '../index';
import data from './mockData';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

jest.mock('../../utils/netflix-roulette-api', () => ({
  search: ({ query }) => {
    const mockData = require('./mockData');
    if (query === 'fail') throw new Error('fail');
    return Promise.resolve(mockData.results);
  },
  searchByPerson: ({ query }) => {
    const mockData = require('./mockData');
    if (query === 'fail') throw new Error('fail');
    return Promise.resolve(mockData.results);
  },
  getFilmByTitle: (title) => {
    const mockData = require('./mockData');
    if (title === 'fail') throw new Error('fail');
    return Promise.resolve(mockData.film);
  },
}));

describe('actions', () => {
  it('should create an action to set a query', () => {
    const query = 'test query';
    const expectedAction = { type: types.QUERY_SET, payload: query };

    expect(actions.setQuery(query)).toEqual(expectedAction);
  });

  it('should create an action to fetch results', () => {
    const query = 'test query';
    const expectedAction = { type: types.RESULTS_FETCH, payload: query };

    expect(actions.fetchResults(query)).toEqual(expectedAction);
  });

  it('should create an action to set succeeded search query', () => {
    const results = ['result1', 'result2'];
    const expectedAction = { type: types.RESULTS_FETCH_SUCCESS, payload: results };

    expect(actions.fetchResultsSuccess(results)).toEqual(expectedAction);
  });

  it('should create an action to set failed search query', () => {
    const err = 'load error';
    const expectedAction = { type: types.RESULTS_FETCH_FAILURE, payload: err };

    expect(actions.fetchResultsError(err)).toEqual(expectedAction);
  });

  it('should create an action to fetch a film data', () => {
    const query = 'test query';
    const expectedAction = { type: types.FILM_FETCH, payload: query };

    expect(actions.fetchFilm(query)).toEqual(expectedAction);
  });

  it('should create an action to set succeeded film query', () => {
    const results = ['result1', 'result2'];
    const expectedAction = { type: types.FILM_FETCH_SUCCESS, payload: results };

    expect(actions.fetchFilmSuccess(results)).toEqual(expectedAction);
  });

  it('should create an action to set failed film query', () => {
    const err = 'load error';
    const expectedAction = { type: types.FILM_FETCH_FAILURE, payload: err };

    expect(actions.fetchFilmError(err)).toEqual(expectedAction);
  });

  it('should create an action to set query type', () => {
    const field = 'title';
    const expectedAction = { type: types.QUERY_SET_TYPE, payload: field };

    expect(actions.setQueryType(field)).toEqual(expectedAction);
  });

  it('should create an action to set sort field', () => {
    const field = 'title';
    const expectedAction = { type: types.RESULTS_SORT_CHANGE, payload: field };

    expect(actions.changeSort(field)).toEqual(expectedAction);
  });

  it('success load results', async () => {
    const query = 'star wars';
    const expectedActions = [
      { type: types.RESULTS_FETCH, payload: { query } },
      { type: types.RESULTS_FETCH_SUCCESS, payload: data.results },
    ];

    const store = mockStore({});
    await store.dispatch(actions.searchByTitle({ query }));

    expect(store.getActions()).toEqual(expectedActions);
  });

  it('fail load results', async () => {
    const query = 'fail';
    const expectedActions = [
      { type: types.RESULTS_FETCH, payload: { query } },
      { type: types.RESULTS_FETCH_FAILURE, payload: 'fail' },
    ];

    const store = mockStore({});
    store.dispatch(await actions.searchByTitle({ query }));

    expect(store.getActions()).toEqual(expectedActions);
  });

  it('success load results by person', async () => {
    const query = 'star wars';
    const expectedActions = [
      { type: types.RESULTS_FETCH, payload: { query } },
      { type: types.RESULTS_FETCH_SUCCESS, payload: data.results },
    ];

    const store = mockStore({});
    await store.dispatch(actions.searchByPerson({ query }));

    expect(store.getActions()).toEqual(expectedActions);
  });

  it('fail load results by person', async () => {
    const query = 'fail';
    const expectedActions = [
      { type: types.RESULTS_FETCH, payload: { query } },
      { type: types.RESULTS_FETCH_FAILURE, payload: 'fail' },
    ];

    const store = mockStore({});
    store.dispatch(await actions.searchByPerson({ query }));

    expect(store.getActions()).toEqual(expectedActions);
  });

  it('action to search by title', async () => {
    const query = 'star wars';
    const expectedActions = [
      { type: types.QUERY_SET, payload: query },
      { type: types.RESULTS_FETCH, payload: { query } },
    ];

    const store = mockStore({ search: { searchBy: 'title' } });
    store.dispatch(await actions.searchFilms(query));

    expect(store.getActions()).toEqual(expectedActions);
  });

  it('action to search by person', async () => {
    const query = 'star wars';
    const expectedActions = [
      { type: types.QUERY_SET, payload: query },
      { type: types.RESULTS_FETCH, payload: { query } },
    ];

    const store = mockStore({ search: { searchBy: 'person' } });
    store.dispatch(await actions.searchFilms(query));

    expect(store.getActions()).toEqual(expectedActions);
  });

  it('success load film data', async () => {
    const query = 'star wars';
    const expectedActions = [
      { type: types.FILM_FETCH, payload: query },
      { type: types.FILM_FETCH_SUCCESS, payload: data.film },
      { type: types.RESULTS_FETCH, payload: { query: data.film.director } },
      { type: types.RESULTS_FETCH_SUCCESS, payload: data.results },
    ];

    const store = mockStore({});
    await store.dispatch(actions.loadFilm(query));

    expect(store.getActions()).toEqual(expectedActions);
  });

  it('fail load film data', async () => {
    const query = 'fail';
    const expectedActions = [
      { type: types.FILM_FETCH, payload: query },
      { type: types.FILM_FETCH_FAILURE, payload: 'fail' },
    ];

    const store = mockStore({});
    await store.dispatch(actions.loadFilm(query));

    expect(store.getActions()).toEqual(expectedActions);
  });
});
