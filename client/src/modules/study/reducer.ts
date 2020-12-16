import * as actions from './actions';
import * as types from './types';

// 초기 상태 선언
const initialStudyForm: types.StudyForm = {
  title: '',
  descStudy: '',
  descAuth: '',
  descManager: '',
  startHour: 0,
  startMinutes: 0,
  endHour: 0,
  endMinutes: 0,
  studyPassword: 0,
};

// 리듀서 작성
function study(
  state: types.StudyForm = initialStudyForm,
  action: types.StudyAction
): types.StudyForm {
  switch (action.type) {
    case actions.SAVE_STUDY_INFO:
      return {
        ...state,
        ...action.payload,
      };
    case actions.SAVE_STUDY_PASSWORD:
      return {
        ...state,
        studyPassword: action.studyPassword,
      };
    case actions.INITIALIZE_STUDY_FORM:
      return initialStudyForm;
    default:
      return state;
  }
}

export default study;
