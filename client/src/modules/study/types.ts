import * as actions from './actions';

// form 객체 타입 준비
export interface StudyForm {
  title: string;
  descStudy: string;
  descAuth: string;
  descManager: string;
  startHour: string;
  startMinutes: string;
  endHour: string;
  endMinutes: string;
}

// 모든 액션 객체들에 대한 타입 준비
export type StudyAction =
  | ReturnType<typeof actions.initializeStudyForm>
  | ReturnType<typeof actions.saveStudyForm>;
