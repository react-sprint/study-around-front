import { combineReducers } from 'redux';
import study from './study';

const rootReducer = combineReducers({
  study,
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
