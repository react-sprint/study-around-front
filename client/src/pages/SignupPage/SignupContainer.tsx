import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import SignupPresentation from './SignupPresentation';
import { signUpRequest } from '../../modules/SignUpModule';

function SignupContainer(): JSX.Element {
  const dispatch = useDispatch();
  const [form, setForm] = useState({
    email: '',
    password: '',
    passwordConfirmation: '',
  });
  const { email, password, passwordConfirmation } = form;

  const onSubmit = (email: string, password: string) => {
    const signUpForm = { email: email, password: password };
    dispatch(signUpRequest(signUpForm));
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e): void => {
    e.preventDefault();
    onSubmit(email, password);
  };

  return (
    <SignupPresentation
      email={email}
      password={password}
      passwordConfirmation={passwordConfirmation}
      onChange={onChange}
      handleSubmit={handleSubmit}
    />
  );
}
export default SignupContainer;
