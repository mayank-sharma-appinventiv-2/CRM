export const FETCH_DATA_REQUEST = 'FETCH_DATA_REQUEST';
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
export const FETCH_DATA_FAILURE = 'FETCH_DATA_FAILURE';

export interface FetchDataRequest {
  type: string;
}

export interface FetchDataSuccess {
  type: typeof FETCH_DATA_SUCCESS;
  payload: any[];
}

export interface FetchDataFailure {
  type: string;
  payload: string;
}
