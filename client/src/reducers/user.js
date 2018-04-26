import { LOGIN, LOGOUT } from '../actions/constants';

export default function usersReducer(state = {}, action) {
  switch (action.type) {
    case LOGIN:
      return action.user;
      break;
    case LOGOUT:
      return {};
      break;
    default:
      return state;
  }
}