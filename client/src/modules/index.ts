import { combineReducers } from 'redux';
import study from './study';
import createStudy, { createStudySaga } from './study/study-create';
import signUp, { signUpSaga } from './SignUpModule';
import login, { loginSaga } from './SignInModule';
import { all } from 'redux-saga/effects';

const rootReducer = combineReducers({
  signUp,
  study,
  createStudy,
  login,
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;

export function* rootSaga() {
  yield all([loginSaga(), signUpSaga(), createStudySaga()]);
}
