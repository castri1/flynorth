import { startLoading, endLoading } from './listeners';

export default function asyncRequestAction(fn, successAction, errorAction = null) {
  return function dispatcher(dispatch) {
    dispatch(startLoading());
    return fn()
      .then(res => dispatch(successAction(res)))
      .catch(err => {
        console.log(err);
        errorAction && dispatch(errorAction(err));
        throw err;
      })
      .finally(() => dispatch(endLoading()))
  }
};