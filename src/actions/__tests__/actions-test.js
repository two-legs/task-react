import * as types from '../actionTypes';
import * as actions from '../index';

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
});
