import { LOGIN, LOGOUT } from '../actions/constants';

export default function authReducer(state = {}, action) {
  switch (action.type) {
    case LOGIN:
      return {
        token: action.token,
        logged: true
      }
      break;
    case LOGOUT:
      return { 
        token: '',
        logged: false
      }
    default:
      return state;
      break;   
  }
}
