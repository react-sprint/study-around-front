import * as actions from './actions';

export type LoginAction =
  | ReturnType<typeof actions.signUpRequest>
  | ReturnType<typeof actions.signUpSuccess>
  | ReturnType<typeof actions.signUpError>;
export type LoginState = {
  loginStatus: {
    loading: boolean;
    data: any | null;
    error: Error | null;
  };
};
//
