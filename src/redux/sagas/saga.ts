import { call, put, takeEvery } from 'redux-saga/effects';
import { FETCH_DATA_REQUEST } from '../actions/actionTypes';
import { fetchDataSuccess, fetchDataFailure } from '../actions/actions';

function* fetchDataSaga() {
  try {
    const response: Response = yield call(fetch, 'https://jsonplaceholder.typicode.com/todos'); // replace with your API endpoint
    const data: any[] = yield response.json();
    yield put(fetchDataSuccess(data));
  } catch (error: any) {
    yield put(fetchDataFailure(error.message));
  }
}

export default function* watchFetchData() {
  yield takeEvery(FETCH_DATA_REQUEST, fetchDataSaga);
}

