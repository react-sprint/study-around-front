import * as types from './types';

export const INITIALIZE_STUDY_FORM = 'study/INITIALIZE_STUDY_FORM' as const;
export const SAVE_STUDY_INFO = 'study/SAVE_STUDY_INFO' as const;
export const SAVE_STUDY_PASSWORD = 'study/SAVE_STUDY_PASSWORD' as const;

export const initializeStudyForm = () => ({
  type: INITIALIZE_STUDY_FORM,
});

export const saveStudyInfo = (studyInfo: types.StudyForm) => ({
  type: SAVE_STUDY_INFO,
  payload: studyInfo,
});

export const saveStudyPassword = (studyPassword: number) => ({
  type: SAVE_STUDY_PASSWORD,
  studyPassword: studyPassword,
});
