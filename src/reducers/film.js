import {
  FILM_FETCH_SUCCESS,
} from '../actions/actionTypes';

const initialState = {
  isPending: false,
};

const film = (state = initialState, action) => {
  switch (action.type) {
    case FILM_FETCH_SUCCESS:
      return { ...action.payload };
    default:
      return state;
  }
};

export default film;
