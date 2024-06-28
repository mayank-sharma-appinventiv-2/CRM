import {combineReducers} from 'redux';
import userReducer from './reducers/reducer';
import { DataState } from './reducers/reducer';

export type RootReducerType  = {users: DataState}

const rootReducer = combineReducers({
  users: userReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
