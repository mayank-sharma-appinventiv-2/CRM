import {
  FETCH_USER_DATA_REQUEST,
  FETCH_USER_DATA_SUCCESS,
  FETCH_USER_DATA_FAILURE,
} from './userActionTypes';

export const fetchUserDataRequest = () => {
  return({
  type: FETCH_USER_DATA_REQUEST,
})};

export const fetchUserDataSuccess = (data: any[]) => ({
  type: FETCH_USER_DATA_SUCCESS,
  payload: data,
});

export const fetchUserDataFailure = (error: string) => ({
  type: FETCH_USER_DATA_FAILURE,
  payload: error,
});
