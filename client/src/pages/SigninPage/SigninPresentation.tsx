import React from 'react';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

interface SigninPresentationProps {
  email: string;
  password: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

function SigninPresentation(props: SigninPresentationProps): JSX.Element {
  const { email, password, handleSubmit, onChange } = props;
  return (
    <Wrapper>
      <Layout>
        <Title>당신의 습관이 되다,</Title>
        <SubTitle>Study-Åround</SubTitle>
        <Form onSubmit={handleSubmit}>
          <InputContainer>
            <Input
              placeholder="이메일"
              name="email"
              value={email}
              onChange={onChange}
              type="email"
              required
            />
            <Input
              placeholder="비밀번호"
              name="password"
              value={password}
              onChange={onChange}
              type="password"
              required
            />
            <Button> 로그인하기 </Button>
          </InputContainer>
        </Form>
        <LinkBtn to={'/signup'}>회원가입</LinkBtn>
      </Layout>
    </Wrapper>
  );
}
const LinkBtn = styled(Link)`
  text-decoration: none;
  margin-top: 25px;
  color: white;
  font-weight: bold;
  font-size: 14px;
`;
const Title = styled.div`
  width: 100%;
  font-size: 32px;
  font-weight: 300;
  color: white;
  text-align: left;
`;
const SubTitle = styled.div`
  width: 100%;
  font-size: 36px;
  font-weight: 900;
  color: white;
  text-align: left;
`;
const TempBorder = css`
  border: 1px solid #ff6178;
`;

const Wrapper = styled.div`
  height: 100vh;
  width: 100%;
  box-sizing: border-box;
  background-image: url('https://mud-kage.kakao.com/dn/kbFB3/btqy4kZcGOl/Inzozb4TONaZ63AMsWM3pk/image.jpg');
  background-size: 100% auto;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Layout = styled.div`
  min-width: 380px;
  min-height: 600px;
  padding: 1.5rem;
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
  margin-top: 80px;
  margin-bottom: 2rem;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Input = styled.input`
  all: unset;
  box-sizing: border-box;
  width: 100%;
  height: 47px;
  border-bottom: 2px lightgray solid;
  padding: 1rem 0px;
  transition: border-color 0.5s ease-in-out;
  background-color: transparent;
  color: white;
  font-weight: bold;
  &::placeholder {
    color: white;
    font-weight: bold;
    font-size: 15px;
  }
  & + & {
    margin-top: 1.25rem;
  }

  & + button {
    margin-top: 40px;
  }
`;

const Button = styled.button`
  all: unset;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 15px;
  color: #191919;
  box-sizing: border-box;
  width: 100%;
  height: 50px;
  padding: 1rem;
  background-color: #fee500;
  border-radius: 4px;
`;

export default SigninPresentation;
