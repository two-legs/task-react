import * as types from './actionTypes';
import loadData from '../utils/netflix-roulette-api';

export const setResults = results => ({
  type: types.RESULTS_SET,
  payload: results,
});

export const setError = error => ({
  type: types.ERROR_SET,
  payload: error,
});

export const loadResults = query => async (dispatch) => {
  try {
    dispatch({ type: types.QUERY_REQUEST });
    const results = await loadData(query);
    dispatch(setResults(results));
    dispatch({ type: types.QUERY_SUCCESS });
  } catch (e) {
    dispatch(setError({ message: 'Can\'t load results', error: e.message }));
    dispatch({ type: types.QUERY_FAILURE });
  }
};

export const searchFilms = queryString => (dispatch, getState) => {
  dispatch({ type: types.QUERY_SET, payload: queryString });
  const state = getState();
  const field = state.search && state.search.searchBy;
  dispatch(loadResults({ [field]: queryString }));
};

export const setQueryType = searchField => ({
  type: types.QUERY_SET_TYPE,
  payload: searchField,
});

export const changeSort = sortField => ({
  type: types.SORT_CHANGE,
  payload: sortField,
});

export const selectFilm = film => ({
  type: types.FILM_SELECT,
  payload: film,
});

export const loadFilm = title => async (dispatch) => {
  try {
    dispatch({ type: types.FILM_REQUEST });
    const result = await loadData({ title });
    dispatch(selectFilm(result));
    dispatch({ type: types.FILM_SUCCESS });
    dispatch(loadResults({ director: result.director }));
  } catch (e) {
    dispatch(setError({ message: `Can't load film with title ${title}`, error: e.message }));
    dispatch({ type: types.FILM_FAILURE });
  }
};
