/* eslint-disable @typescript-eslint/no-explicit-any */
import types from './types';
import {ActionCreator} from 'redux';

import {IPost} from './reducer';

export const fetchPostsRequest: ActionCreator<any> = () => ({
  type: types.FETCH_POST_REQUEST,
});

export const fetchPostsSuccess: ActionCreator<any> = (payload: IPost[]) => ({
  type: types.FETCH_POST_SUCCESS,
  payload,
});

export const fetchPostsFailure: ActionCreator<any> = (payload: string) => ({
  type: types.FETCH_POST_FAILURE,
  payload,
});
