import * as actions from './actions';
import { createStudyApi } from './api';

import { call, put, takeEvery } from 'redux-saga/effects';

function* createStudyFuncSaga(action: ReturnType<typeof actions.createStudy>) {
  try {
    yield call(createStudyApi, action.payload);
    yield put(actions.createStudySuccess());
    // yield call([history, history.push], '/signin');
  } catch (e) {
    yield put(actions.createStudyError(e));
  }
}
export function* createStudySaga() {
  yield takeEvery(actions.CREATE_STUDY, createStudyFuncSaga);
}
