import { combineReducers } from 'redux';
import user from './user';
import listeners from './listeners';
import auth from './auth';

export default combineReducers({
  auth,
  // user,
  listeners
});