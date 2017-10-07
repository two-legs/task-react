import {
  QUERY_SUCCESS,
  QUERY_REQUEST,
  QUERY_FAILURE,
  RESULTS_SET,
  SORT_CHANGE,
} from '../actions/actionTypes';

const initialState = {
  results: [],
  sortType: 'rating',
  isPending: false,
};

const sortByField = (results, field) => (
  [...results].sort((a, b) => b[field] - a[field])
);

const results = (state = initialState, action) => {
  switch (action.type) {
    case RESULTS_SET:
      return { ...state, results: sortByField(action.payload) };
    case SORT_CHANGE:
      return {
        ...state,
        sortType: action.payload,
        results: sortByField(state.results),
      };
    case QUERY_REQUEST:
      return { ...state, isPending: true };
    case QUERY_SUCCESS:
    case QUERY_FAILURE:
      return { ...state, isPending: false };
    default:
      return state;
  }
};

export default results;
