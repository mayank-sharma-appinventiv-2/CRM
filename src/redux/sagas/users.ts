import { call, put, takeEvery } from "redux-saga/effects";
import {
  fetchDataSuccess,
  fetchDataFailure,
  fetchDataRequest,
} from "../slices/users";
import { getDataApi } from "src/utils/api/api";

export interface TestApiResponse {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

function* fetchUserDataSaga() {
  try {
    const response: TestApiResponse[] = yield call(getDataApi, {
      path: "todos",
    });
    yield put(fetchDataSuccess(response));
  } catch (error) {
    yield put(fetchDataFailure((error as Error).message));
  }
}

export default function* watchFetchData() {
  yield takeEvery(fetchDataRequest.type, fetchUserDataSaga);
}
