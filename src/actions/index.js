import * as types from './actionTypes';
import {
  search,
  searchByPerson as searchByPersonFetch,
  getFilmByTitle,
} from '../utils/netflix-roulette-api';

export const setQuery = query => ({
  type: types.QUERY_SET,
  payload: query,
});

export const fetchResults = query => ({
  type: types.RESULTS_FETCH,
  payload: query,
});

export const fetchResultsSuccess = results => ({
  type: types.RESULTS_FETCH_SUCCESS,
  payload: results,
});

export const fetchResultsError = err => ({
  type: types.RESULTS_FETCH_FAILURE,
  payload: err,
});

export const fetchFilm = query => ({
  type: types.FILM_FETCH,
  payload: query,
});

export const fetchFilmSuccess = results => ({
  type: types.FILM_FETCH_SUCCESS,
  payload: results,
});

export const fetchFilmError = err => ({
  type: types.FILM_FETCH_FAILURE,
  payload: err,
});

export const searchByTitle = query => async (dispatch) => {
  try {
    dispatch(fetchResults(query));

    const results = await search(query);
    dispatch(fetchResultsSuccess(results));
  } catch (err) {
    dispatch(fetchResultsError(err.message || 'Can\'t load results'));
  }
};

export const searchByPerson = query => async (dispatch) => {
  try {
    dispatch(fetchResults(query));
    const results = await searchByPersonFetch(query);
    dispatch(fetchResultsSuccess(results));
  } catch (err) {
    dispatch(fetchResultsError(err.message || 'Can\'t load results'));
  }
};

export const searchFilms = queryString => async (dispatch, getState) => {
  dispatch(setQuery(queryString));
  const state = getState();
  const field = state.search && state.search.searchBy;
  if (field === 'title') {
    return dispatch(searchByTitle({ query: queryString }));
  } else if (field === 'person') {
    return dispatch(searchByPerson({ query: queryString }));
  }

  return Promise.reject();
};

export const setQueryType = searchField => ({
  type: types.QUERY_SET_TYPE,
  payload: searchField,
});

export const changeSort = sortField => ({
  type: types.RESULTS_SORT_CHANGE,
  payload: sortField,
});

export const loadFilm = title => async (dispatch) => {
  try {
    dispatch(fetchFilm(title));
    const result = await getFilmByTitle(title);
    dispatch(fetchFilmSuccess(result));
    dispatch(searchByPerson({ query: result.director }));
  } catch (err) {
    dispatch(fetchFilmError(err.message || `Can't load film with title ${title}`));
  }
};
