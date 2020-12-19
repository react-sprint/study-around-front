import * as actions from './actions';

export type LoginAction =
  | ReturnType<typeof actions.loginRequest>
  | ReturnType<typeof actions.loginSuccess>
  | ReturnType<typeof actions.loginError>;
export type LoginState = {
  loginStatus: {
    loading: boolean;
    data: any | null;
    error: Error | null;
  };
};
//
