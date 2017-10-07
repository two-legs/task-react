import {
  QUERY_REQUEST,
  QUERY_SET_TYPE,
} from '../actions/actionTypes';

const initialState = {
  query: '',
  searchBy: 'title',
};

const search = (state = initialState, action) => {
  switch (action.type) {
    case QUERY_REQUEST:
      return { ...state, query: action.payload };
    case QUERY_SET_TYPE:
      return { ...state, searchBy: action.payload };
    default:
      return state;
  }
};

export default search;
