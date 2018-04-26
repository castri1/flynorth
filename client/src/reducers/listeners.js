import { LOADING, ERROR } from '../actions/constants';

export default function listenersReducer(state = {}, action) {
  switch (action.type) {
    case LOADING:
      return {
        ...state,
        loading: action.loading
      };
    case ERROR:
      return {
        ...state,
        error: action.message
      }
    default:
      return state;
  }
}