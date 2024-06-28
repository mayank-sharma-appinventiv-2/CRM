import { call, put, takeEvery } from 'redux-saga/effects';
import { FETCH_USER_DATA_REQUEST } from '../actions/userActionTypes';
import { fetchUserDataSuccess, fetchUserDataFailure } from '../actions/userActions';

function* fetchUserDataSaga() {
  try {
    const response: Response = yield call(fetch, 'https://jsonplaceholder.typicode.com/todos'); // replace with your API endpoint
    const data: any[] = yield response.json();
    yield put(fetchUserDataSuccess(data));
  } catch (error: any) {
    yield put(fetchUserDataFailure(error.message));
  }
}

export default function* watchFetchData() {
  yield takeEvery(FETCH_USER_DATA_REQUEST, fetchUserDataSaga);
}

