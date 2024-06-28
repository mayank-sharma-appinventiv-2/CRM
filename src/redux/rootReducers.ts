import {combineReducers} from 'redux';
import userReducer from './reducers/users';
import { DataState } from './reducers/users';

export type RootReducerType  = {users: DataState}

const rootReducer = combineReducers({
  users: userReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
