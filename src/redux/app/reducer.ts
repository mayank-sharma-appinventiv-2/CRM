import types from './types';
import { createReducer } from 'reduxsauce'


export interface IPost {
  userId?: any;
  id?: any;
  title?: any;
  body?: any;
}

export interface PostsState {
  post: IPost[];
  error: boolean;
  pending: boolean; 
}

const initialState: PostsState = {
  pending: false,
  post: [],
  error: false,
};

export const pending = (state = initialState) => {
  return { ...state, pending: true }
}

export const success = (state = initialState, action: any) => {
  return { ...state, pending: false, post: action.payload.posts, error: false  }
}

export const error = (state = initialState) => {
  return { ...state, pending: false, error: true, post:[] }
}

export const HANDLERS = {
  [types.FETCH_POST_REQUEST]: pending,
  [types.FETCH_POST_SUCCESS]: success,
  [types.FETCH_POST_FAILURE]: success
}

// export default (state = initialState, action: any) => {
//   switch (action.type) {
//     case types.FETCH_POST_REQUEST:
//       return {
//         ...state,
//         pending: true,
//       };
//     case types.FETCH_POST_SUCCESS:
//       return {
//         ...state,
//         pending: false,
//         post: action.payload.posts,
//         error: false,
//       };
//     case types.FETCH_POST_FAILURE:
//       return {
//         ...state,
//         pending: false,
//         post: [],
//         error: true,
//       };
//     default:
//       return {
//         ...state,
//       };
//   }
// };

export default createReducer(initialState, HANDLERS)
