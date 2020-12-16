import * as actions from './actions';
export * from '../types';

export type StudyCreateAction =
  | ReturnType<typeof actions.createStudy>
  | ReturnType<typeof actions.createStudySuccess>
  | ReturnType<typeof actions.createStudyError>;

export interface StudyCreateState {
  createStatus: {
    loading: boolean;
    error: Error | null;
  };
}
