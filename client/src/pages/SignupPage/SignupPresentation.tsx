import React from 'react';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
interface SignupPresentationProps {
  email: string;
  password: string;
  passwordConfirmation: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}
function SignupPresentation(props: SignupPresentationProps): JSX.Element {
  const {
    email,
    password,
    passwordConfirmation,
    handleSubmit,
    onChange,
  } = props;

  //
  return (
    <Wrapper>
      <Title>Study-Åround</Title>
      <Layout>
        <Form onSubmit={handleSubmit}>
          <InputContainer>
            <InputTitle>계정 이메일</InputTitle>
            <Input
              placeholder="이메일"
              name="email"
              value={email}
              onChange={onChange}
              type="email"
              required
            />
            <InputTitle style={{ marginTop: '40px' }}>비밀번호</InputTitle>
            <Input
              placeholder="비밀번호(8~32자리)"
              name="password"
              value={password}
              onChange={onChange}
              type="password"
              required
            />
            <Input
              placeholder="비밀번호 재입력"
              name="passwordConfirmation"
              value={passwordConfirmation}
              onChange={onChange}
              type="password"
              required
            />
            <Button type="submit">가입하기</Button>
          </InputContainer>
        </Form>
        {/* <Link to={'/signin'} style={{ textDecoration: 'none', color: 'red' }}>
          로그인하기
        </Link> */}
      </Layout>
    </Wrapper>
  );
}
const InputTitle = styled.div`
  width: 100%;
  text-align: left;
  font-size: 12px;
  color: #000;
  font-weight: normal;
`;
const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  font-size: 32px;
  font-weight: 300;
  color: black;
  margin-bottom: 30px;
`;
const TempBorder = css`
  border: 1px solid #ff6178;
`;
const Wrapper = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
`;
const Layout = styled.div`
  min-width: 580px;
  min-height: 600px;
  background-color: white;
  padding: 58px 69px 139px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #e5e5e5;
  border-radius: 2px;
  box-sizing: border-box;
  // background-color: props => props.theme.colors.white;
  // border-radius: props => props.theme.borders.radius;
`;
const Form = styled.form`
  width: 100%;
`;
const InputContainer = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2rem;
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
  color: black;
  font-weight: bold;
  &::placeholder {
    color: #ccc;
    font-weight: bold;
    font-size: 15px;
  }
  & + & {
    margin-top: 1.25rem;
  }
  & + button {
    margin-top: 100px;
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
export default SignupPresentation;
