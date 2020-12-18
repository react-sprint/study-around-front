import { loginApiProps } from './api';

export const LOGIN_REQUEST = 'login/LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'login/LOGIN_SUCCESS';
export const LOGIN_ERROR = 'login/LOGIN_ERROR';

export const loginRequest = (form) => {
  return {
    type: 'LOGIN_REQUEST',
    payload: form,
  };
};

export const loginSuccess = (loginData: loginApiProps) => {
  window.localStorage.setItem('token', loginData['JWT token']);
  return {
    type: 'LOGIN_SUCCESS',
    payload: loginData,
  };
};

export const loginError = (error) => {
  alert('아이디 혹은 비밀번호를 확인해주세요.');
  return {
    type: 'LOGIN_ERROR',
    error,
  };
};
//
