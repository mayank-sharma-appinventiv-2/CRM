import {combineReducers} from 'redux';
import postReducer from './app/reducer';

const rootReducer = combineReducers({
  posts: postReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
