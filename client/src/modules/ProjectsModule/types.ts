import * as actions from './actions';

export type ProjectsAction =
  | ReturnType<typeof actions.projectsRequest>
  | ReturnType<typeof actions.projectsSuccess>
  | ReturnType<typeof actions.projectsError>;

export type ProjectsState = {
  ProjectsStatus: {
    loading: boolean;
    data: any | null;
    error: Error | null;
  };
};
