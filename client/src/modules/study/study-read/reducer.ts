import * as actions from './actions';
import * as types from './types';

const initialState: types.StudyReadState = {
  readStatus: {
    loading: false,
    error: null,
  },
};

const readStudy = (
  state: types.StudyReadState = initialState,
  action: types.StudyReadAction
) => {
  switch (action.type) {
    case actions.READ_STUDY:
      return {
        ...state,
        readStatus: {
          loading: true,
          error: null,
        },
      };
    case actions.READ_STUDY_SUCCESS:
      return {
        ...state,
        readStatus: {
          loading: false,
          error: null,
        },
      };
    case actions.READ_STUDY_ERROR:
      return {
        ...state,
        readStatus: {
          loading: false,
          error: action.error,
        },
      };
    default:
      return state;
  }
};

export default readStudy;
