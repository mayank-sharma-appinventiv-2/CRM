import {combineReducers} from 'redux';
import userReducer from './reducers/users';
import { UserDataState } from './reducers/users';

export type RootReducerType  = {users: UserDataState}

const rootReducer = combineReducers({
  users: userReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
