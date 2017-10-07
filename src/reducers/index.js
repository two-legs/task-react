import { combineReducers } from 'redux';
import results from './results';
import film from './film';
import search from './search';
import error from './error';

export default combineReducers({ search, results, film, error });
