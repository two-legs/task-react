import {
  ERROR_SET,
  ERROR_RESET,
} from '../actions/actionTypes';

const initialState = { };

const error = (state = initialState, action) => {
  switch (action.type) {
    case ERROR_SET:
      return { ...action.payload };
    case ERROR_RESET:
      return {};
    default:
      return state;
  }
};

export default error;