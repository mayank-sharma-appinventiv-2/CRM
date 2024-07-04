import { combineReducers } from "redux";
import userReducer from "./slices/users";
import { UserDataState } from "./slices/users";

export type RootReducerType = { users: UserDataState };

const rootReducer = combineReducers({
  users: userReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
