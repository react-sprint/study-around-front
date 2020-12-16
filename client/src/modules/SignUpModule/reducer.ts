const login = (state = {}, action) => {
  switch (action.type) {
    case 'SIGNUP_REQUEST':
      return {
        ...state,
        signUpStatus: { success: false },
      };
    case 'SIGNUP_SUCCESS':
      return {
        ...state,
        signUpStatus: { success: true },
      };
    case 'SIGNUP_ERROR':
      return {
        ...state,
        signUpStatus: { success: false, error: action.payload },
      };
    default:
      return state;
  }
};

export default login;
//
//
