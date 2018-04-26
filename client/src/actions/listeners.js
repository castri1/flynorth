import { LOADING } from './constants';

export const startLoading = () => ({
  type: LOADING,
  loading: true
});

export const endLoading = () => ({
  type: LOADING,
  loading: false
});
