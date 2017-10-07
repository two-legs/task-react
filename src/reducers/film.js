import {
  FILM_SELECT,
} from '../actions/actionTypes';

const initialState = {
  isPending: false,
};

const film = (state = initialState, action) => {
  switch (action.type) {
    case FILM_SELECT:
      return { ...action.payload };
    default:
      return state;
  }
};

export default film;
