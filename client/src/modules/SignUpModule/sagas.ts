import { signUpSuccess, signUpError, signUpRequest } from './actions';
import { call, put, takeEvery } from 'redux-saga/effects';
import { signUpApi } from './api';
import history from '../history';
function* signUpFuncSaga(action: ReturnType<typeof signUpRequest>) {
  console.log('test');
  try {
    const signUpData = yield call(signUpApi, action.payload);
    yield put(signUpSuccess(signUpData));
    yield call([history, history.push], '/signin');
  } catch (e) {
    yield put(signUpError(e));
  }
}
export function* signUpSaga() {
  yield takeEvery('signup/SignUp_REQUEST', signUpFuncSaga);
}
