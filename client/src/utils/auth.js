import Api from './api';

function login(credentials) {
  return Api.POST("/token", credentials)
    .then(res => {
      localStorage.token = res.token;
      return res;
    });
}

export default {
  login
};