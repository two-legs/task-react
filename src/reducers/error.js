import {
  FILM_FETCH_FAILURE,
  RESULTS_FETCH_FAILURE,
} from '../actions/actionTypes';

const initialState = { };

const error = (state = initialState, action) => {
  switch (action.type) {
    case FILM_FETCH_FAILURE:
    case RESULTS_FETCH_FAILURE:
      return { message: action.payload };
    default:
      return {};
  }
};

export default error;