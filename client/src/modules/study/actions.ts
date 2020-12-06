import * as types from './types';

export const SAVE_STUDY_FORM = 'study/SAVE_STUDY_FORM' as const;
export const INITIALIZE_STUDY_FORM = 'study/INITIALIZE_STUDY_FORM' as const;

export const initializeStudyForm = () => ({
  type: INITIALIZE_STUDY_FORM,
});

export const saveStudyForm = (StudyForm: types.StudyForm) => ({
  type: SAVE_STUDY_FORM,
  payload: {
    title: StudyForm.title,
    descStudy: StudyForm.descStudy,
    descAuth: StudyForm.descAuth,
    descManager: StudyForm.descManager,
    startHour: StudyForm.startHour,
    startMinutes: StudyForm.startMinutes,
    endHour: StudyForm.endHour,
    endMinutes: StudyForm.endMinutes,
  },
});
