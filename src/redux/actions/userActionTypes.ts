export const FETCH_USER_DATA_REQUEST = 'FETCH_USER_DATA_REQUEST';
export const FETCH_USER_DATA_SUCCESS = 'FETCH_USER_DATA_SUCCESS';
export const FETCH_USER_DATA_FAILURE = 'FETCH_USER_DATA_FAILURE';

export interface FetchDataRequest {
  type: string;
}

export interface FetchDataSuccess {
  type: string
  payload: any[];
}

export interface FetchDataFailure {
  type: string;
  payload: string;
}
