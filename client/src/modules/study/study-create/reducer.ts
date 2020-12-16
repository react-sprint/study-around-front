import * as actions from './actions';
import * as types from './types';

const initialState: types.StudyCreateState = {
  createStatus: {
    loading: false,
    error: null,
  },
};

const createStudy = (
  state: types.StudyCreateState = initialState,
  action: types.StudyCreateAction
) => {
  switch (action.type) {
    case actions.CREATE_STUDY:
      return {
        ...state,
        createStatus: {
          loading: true,
          error: null,
        },
      };
    case actions.CREATE_STUDY_SUCCESS:
      return {
        ...state,
        createStatus: {
          loading: false,
          error: null,
        },
      };
    case actions.CREATE_STUDY_ERROR:
      return {
        ...state,
        createStatus: {
          loading: false,
          error: action.error,
        },
      };
    default:
      return state;
  }
};

export default createStudy;
