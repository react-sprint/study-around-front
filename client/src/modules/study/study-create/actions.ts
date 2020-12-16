import * as types from './types';
import { AxiosError } from 'axios';

export const CREATE_STUDY = 'study/CREATE_STUDY' as const;
export const CREATE_STUDY_SUCCESS = 'study/CREATE_STUDY_SUCCESS' as const;
export const CREATE_STUDY_ERROR = 'study/CREATE_STUDY_ERROR' as const;

export const createStudy = (studyForm: types.StudyForm) => {
  console.log('서버 요청 중..');
  return {
    type: CREATE_STUDY,
    payload: studyForm,
  };
};

export const createStudySuccess = () => {
  console.log('스터디 생성 완료!');
  return {
    type: CREATE_STUDY_SUCCESS,
  };
};

export const createStudyError = (error: AxiosError) => {
  console.log('스터디 생성 실패');
  return {
    type: CREATE_STUDY_ERROR,
    error: error,
  };
};
