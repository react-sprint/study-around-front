import React from 'react';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
// import { IUseInput } from '../../hooks/useInput'; //커스텀 훅을 쓸 수 있을 듯.

interface ISigninProps {
  // email: IUseInput;
  // password: IUseInput;
  email: string;
  password: string;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

function SigninPresentation(props: ISigninProps) {
  const { email, password, onSubmit } = props;

  return (
    <Wrapper>
      <Layout>
        <h2> 당신의 습관이 되다. </h2>
        <Form method="post" onSubmit={onSubmit} encType="multipart/form-data">
          <InputContainer>
            <Input placeholder="이메일" name="email" {...email} required />
            <Input
              placeholder="비밀번호"
              name="password"
              {...password}
              required
            />
            <Button> 로그인하기 </Button>
          </InputContainer>
        </Form>
        <h3> 계정이 없으신가요? </h3>
        <Link to={'/signup'} style={{ textDecoration: 'none', color: 'red' }}>
          가입하러 가기
        </Link>
      </Layout>
    </Wrapper>
  );
}

const TempBorder = css`
  border: 1px solid #ff6178;
`;

const Wrapper = styled.div`
  height: 100vh;
  width: 100%;
  box-sizing: border-box;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const Layout = styled.div`
  min-width: 500px;
  min-height: 600px;
  padding: 1.5rem;
  ${TempBorder};

  display: flex;
  flex-direction: column;
  align-items: center;
  // background-color: props => props.theme.colors.white;
  // border-radius: props => props.theme.borders.radius;
`;

const Form = styled.form`
  width: 100%;
`;

const InputContainer = styled.section`
  width: 100%;
  margin-bottom: 2rem;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Input = styled.input`
  all: unset;

  box-sizing: border-box;
  width: 100%;
  height: 40px;

  padding: 1rem;
  transition: border-color 0.5s ease-in-out;

  & + & {
    margin-top: 1.25rem;
  }

  & + button {
    margin-top: 2rem;
  }
`;

const Button = styled.button`
  all: unset;

  box-sizing: border-box;
  width: 100%;
  height: 60px;
  padding: 1rem;

  ${TempBorder};
  background-color: ivory;
  border-radius: 25px;
`;

export default SigninPresentation;
