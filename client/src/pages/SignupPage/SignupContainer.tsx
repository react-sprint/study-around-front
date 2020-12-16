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
    // if (password === passwordConfirmation) {
    //   axios
    //     .post('/users', {
    //       email: email,
    //       password: password,
    //     })
    //     .then((response) => {
    //       console.log(response.data.message);
    //       if (response.data.message === 'invalid email or password') {
    //         alert('사용할 수 없는 아이디 혹은 패스워드입니다.');
    //       } else {
    //         history.push('/signin');
    //       }
    //     })
    //     .catch((error) => {
    //       console.log(error);
    //     });
    // } else {
    //   alert('패스워드가 일치하지 않습니다.');
    // }
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
