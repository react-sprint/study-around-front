import { combineReducers } from 'redux';
import login, { loginSaga } from './SignInModule';
import signUp, { signUpSaga } from './SignUpModule';
import { all } from 'redux-saga/effects';

const rootReducer = combineReducers({
  login,
  signUp,
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;

export function* rootSaga() {
  yield all([loginSaga(), signUpSaga()]);
}
