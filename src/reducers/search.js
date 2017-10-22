import {
  QUERY_SET,
  QUERY_SET_TYPE,
} from '../actions/actionTypes';

const initialState = {
  query: '',
  searchBy: 'title',
  searchTypes: [{ id: 'title', caption: 'Title' }, { id: 'person', caption: 'Director' }],
};

const search = (state = initialState, action) => {
  switch (action.type) {
    case QUERY_SET:
      return { ...state, query: action.payload };
    case QUERY_SET_TYPE:
      return { ...state, searchBy: action.payload };
    default:
      return state;
  }
};

export default search;
