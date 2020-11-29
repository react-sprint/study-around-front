import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
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
            <Input placeholder="비밀번호" name="password" {...password} required />
          </InputContainer>
          <Button> 로그인하기 </Button>
        </Form>
        <Link to={'/signup'}> 가입하기 </Link>
      </Layout>
    </Wrapper>
  );

}

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
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.5rem;
  // background-color: props => props.theme.colors.white;
  // border-radius: props => props.theme.borders.radius;
`
const Form = styled.form`
  width:100%;
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
`;
const Button = styled.button`
  all: unset;
  width: 100%;
  height: 40px;
  padding: 1rem;
  background-color: blue;
  // 좀더 둥글게
`;
export default SigninPresentation;
