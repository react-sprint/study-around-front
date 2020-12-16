import { combineReducers } from 'redux';
import study from './study';
import createStudy, { createStudySaga } from './study/study-create';
import { all } from 'redux-saga/effects';

const rootReducer = combineReducers({
  study,
  createStudy,
});

export default rootReducer;

// useSelector 쓸 때 필요
export type RootState = ReturnType<typeof rootReducer>;

export function* rootSaga() {
  yield all([createStudySaga()]);
}
