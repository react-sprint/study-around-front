import * as actions from './actions';
import { readStudyApi } from './api';

import { call, put, takeEvery } from 'redux-saga/effects';

function* readStudyFuncSaga(action: ReturnType<typeof actions.readStudy>) {
  try {
    yield call(readStudyApi, action.payload);
    yield put(actions.readStudySuccess());
    // yield call([history, history.push], '/signin');
  } catch (e) {
    yield put(actions.readStudyError(e));
  }
}
export function* readStudySaga() {
  yield takeEvery('READ_STUDY', readStudyFuncSaga);
}
