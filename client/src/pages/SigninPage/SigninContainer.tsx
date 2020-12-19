import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import SigninPresentation from './SigninPresentation';
import { loginRequest } from '../../modules/SignInModule';
// import { signIpRequest } from '../../modules/SignUpModule';

function SigninContainer(): JSX.Element {
  const dispatch = useDispatch();
  const [form, setForm] = useState({
    email: '',
    password: '',
  });
  const { email, password } = form;

  const onSubmit = (email: string, password: string) => {
    const signInForm = { email: email, password: password };
    dispatch(loginRequest(signInForm));
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
    <SigninPresentation
      email={email}
      password={password}
      onChange={onChange}
      handleSubmit={handleSubmit}
    />
  );
}
export default SigninContainer;
