const login = (state = {}, action) => {
  switch (action.type) {
    case 'LOGIN_REQUEST':
      return {
        ...state,
        loginStatus: { loading: true, error: null, data: null },
      };
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        loginStatus: {
          loading: false,
          error: null,
          data: action.payload.userInfo,
        },
      };
    case 'LOGIN_ERROR':
      return {
        ...state,
        loginStatus: { loading: false, error: action.payload, data: null },
      };
    default:
      return state;
  }
};

export default login;
//
