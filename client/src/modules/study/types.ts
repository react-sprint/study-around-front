import * as actions from './actions';

// form 객체 타입 준비
export interface StudyForm {
  title: string;
  descStudy: string;
  descAuth: string;
  descManager: string;
  startHour: number;
  startMinutes: number;
  endHour: number;
  endMinutes: number;
  studyPassword?: number;
}

// 모든 액션 객체들에 대한 타입 준비
export type StudyAction =
  | ReturnType<typeof actions.initializeStudyForm>
  | ReturnType<typeof actions.saveStudyInfo>
  | ReturnType<typeof actions.saveStudyPassword>;
