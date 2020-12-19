const projects = (state = {}, action) => {
  console.log('reducer action', action);
  switch (action.type) {
    case 'PROJECT_LIST_GET_REQUEST':
      return {
        ...state,
        projectsStatus: { loading: true, error: null, data: null },
      };
    case 'PROJECT_LIST_GET_SUCCESS':
      return {
        ...state,
        projectsStatus: {
          loading: false,
          error: null,
          data: action.payload,
        },
      };
    case 'PROJECT_LIST_GET_ERROR':
      return {
        ...state,
        projectsStatus: { loading: false, error: action.payload, data: null },
      };
    default:
      return state;
  }
};

export default projects;
//
