import { signUpSuccess, signUpError, signUpRequest } from './actions';
import { call, put, takeEvery } from 'redux-saga/effects';
import { signUpApi } from './api';
import history from '../history';
function* signUpFuncSaga(action: ReturnType<typeof signUpRequest>) {
  try {
    const signUpData = yield call(signUpApi, action.payload);
    console.log('signUpData in saga', signUpData);
    yield put(signUpSuccess(signUpData));
    yield call([history, history.push], '/signin'); // 임시
  } catch (e) {
    yield put(signUpError(e));
  }
}
export function* signUpSaga() {
  yield takeEvery('SIGNUP_REQUEST', signUpFuncSaga);
}
//
//
