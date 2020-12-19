import { projectsRequest, projectsSuccess, projectsError } from './actions';
import { call, put, takeEvery } from 'redux-saga/effects';
import { projectsApi } from './api';
import history from '../history';

function* projectsFuncSaga(action: ReturnType<typeof projectsRequest>) {
  try {
    const projectsData = yield call(projectsApi);
    console.log('projectsData in saga', projectsData);
    yield put(projectsSuccess(projectsData));
  } catch (e) {
    if (e.response.data.message === 'Not Authenticated') {
      // yield put() //로그인으로 돌리도록
    } else {
      yield put(projectsError(e));
    }
  }
}
export function* projectsSaga() {
  yield takeEvery('PROJECT_LIST_GET_REQUEST', projectsFuncSaga);
}
//
