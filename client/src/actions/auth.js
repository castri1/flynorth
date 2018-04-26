import asyncRequestAction from './asyncRequestAction';
import auth from '../utils/auth';
import { LOGIN, LOGOUT, ERROR } from './constants';


export const login = (credentials) => asyncRequestAction(
  () => auth.login(credentials),
  ({ token }) => ({
    type: LOGIN,
    token
  }),
  ({message}) => ({
    type: ERROR,
    message
  })
)

export const logout = () => ({
  type: LOGOUT
})