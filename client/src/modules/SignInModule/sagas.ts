import { loginRequest, loginSuccess, loginError } from './actions';
import { call, put, takeEvery } from 'redux-saga/effects';
import { loginApi } from './api';
import history from '../history';
function* loginFuncSaga(action: ReturnType<typeof loginRequest>) {
  try {
    const loginData = yield call(loginApi, action.payload);
    yield put(loginSuccess(loginData));
    yield call([history, history.push], '/');
  } catch (e) {
    yield put(loginError(e));
  }
}
export function* loginSaga() {
  // yield all(loginSaga);
  yield takeEvery('LOGIN_REQUEST', loginFuncSaga);
}
