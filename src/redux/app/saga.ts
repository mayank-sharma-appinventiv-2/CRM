/* eslint-disable @typescript-eslint/no-explicit-any */
import { takeLatest} from 'redux-saga/effects';

import types from './types';

export interface Post {
  userId?: any;
  id?: any;
  title?: any;
  body?: any;
}

export interface Res {
  data?: Post[];
}

// const getPost = () =>
//   axios.get<Post[]>('https://jsonplaceholder.typicode.com/posts');

// function* fetchPostsSaga() {
//   try {
//     const res: Res = yield call(getPost);
//     yield put(fetchPostsSuccess({posts: res.data}));
//   } catch (e) {
//     yield put(fetchPostsFailure({error: 'error'}));
//   }
// }

// function* postsSaga() {
//   yield all([takeLatest(types.FETCH_POST_REQUEST, fetchPostsSaga)]);
// }

function* initialSetup() {
  // const { navigation, cb } = action.payload;
  yield true 
  // try {} catch (err) {
// }
}


function* watchInitialSetup() {
  yield takeLatest(types.INITIAL_SETUP, initialSetup);
}

export default { watchInitialSetup};
