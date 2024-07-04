import { all } from "redux-saga/effects";
import watchUserFetchData from "./sagas/users";

export default function* rootSaga() {
  yield all([watchUserFetchData()]);
}
