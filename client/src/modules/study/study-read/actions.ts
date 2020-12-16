import * as types from './types';
import { AxiosError } from 'axios';

export const READ_STUDY = 'study/READ_STUDY' as const;
export const READ_STUDY_SUCCESS = 'study/READ_STUDY_SUCCESS' as const;
export const READ_STUDY_ERROR = 'study/READ_STUDY_ERROR' as const;

export const readStudy = (studyForm: types.StudyForm) => {
  console.log('서버 요청 중..');
  return {
    type: READ_STUDY,
    payload: studyForm,
  };
};

export const readStudySuccess = () => {
  console.log('스터디 가져오기 완료!');
  return {
    type: READ_STUDY_SUCCESS,
  };
};

export const readStudyError = (error: AxiosError) => {
  console.log('스터디 가져오기 실패');
  return {
    type: READ_STUDY_ERROR,
    error: error,
  };
};
