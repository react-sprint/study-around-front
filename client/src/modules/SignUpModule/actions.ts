export const SIGNUP_REQUEST = 'signup/SignUp_REQUEST';
export const SIGNUP_SUCCESS = 'signup/SignUp_SUCCESS';
export const SIGNUP_ERROR = 'signup/SignUp_ERROR';

export const signUpRequest = (form) => {
  return {
    type: 'SIGNUP_REQUEST',
    payload: form,
  };
};

export const signUpSuccess = (signUpData) => {
  alert('회원가입이 완료되었습니다.');
  return {
    type: 'SIGNUP_SUCCESS',
    payload: signUpData,
  };
};

export const signUpError = (error) => {
  alert('회원가입 실패');
  console.log(error);
  return {
    type: 'SIGNUP_ERROR',
    error,
  };
};
//
