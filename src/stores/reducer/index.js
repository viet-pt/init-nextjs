import { combineReducers } from 'redux';
import { userReducer, authorizedReducer } from './userReducer';
import { languageReducer } from './languageReducer';
import { progressReducer } from './progressReducer';

export const rootReducer = combineReducers({
  user: userReducer,
  progressReducer,
  authorizedReducer,
  language: languageReducer,
});
