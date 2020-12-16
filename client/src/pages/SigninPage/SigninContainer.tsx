import React, { useState, useEffect } from 'react';
import SigninPresentation from './SigninPresentation';
import { useDispatch } from 'react-redux';
import { loginRequest } from '../../modules/SignInModule';

function SigninContainer(): JSX.Element {
  const dispatch = useDispatch();
  const [form, setForm] = useState({
    email: '',
    password: '',
  });
  const { email, password } = form;

  const onSubmit = (form: { email: string; password: string }) => {
    dispatch(loginRequest(form));
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
    onSubmit(form);
  };

  return (
    <SigninPresentation
      email={email}
      password={password}
      onChange={onChange}
      handleSubmit={handleSubmit}
    />
  );
}

export default SigninContainer;
