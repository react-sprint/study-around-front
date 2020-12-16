import * as actions from './actions';
export * from '../types';

export type StudyReadAction =
  | ReturnType<typeof actions.readStudy>
  | ReturnType<typeof actions.readStudySuccess>
  | ReturnType<typeof actions.readStudyError>;

export interface StudyReadState {
  readStatus: {
    loading: boolean;
    error: Error | null;
  };
}
