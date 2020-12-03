import React, { Fragment } from 'react';
import styled from 'styled-components';
import PassWordGenerator from './PassWordGenerator';

function Form2({ setStep }: any) {
  return (
    <Fragment>
      <Layout>
        <Title>스터디룸 비밀번호를 설정해주세요</Title>
        <PassWordGenerator />
        <SubmitButton onClick={() => setStep(3)}>완료</SubmitButton>
      </Layout>
    </Fragment>
  );
}

export default Form2;

const SubmitButton = styled.div`
  cursor: pointer;
  margin-top: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  color: #fff;
  font-size: 18px;
  width: 150px;
  height: 50px;
  background-color: #5c68ff;
  border-radius: 5px;
  border: none;
`;

const Title = styled.div`
  font-size: 20px;
  font-weight: bold;
  color: #737373;
`;

const Layout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 510px;
  padding: 32px 16px;
  box-sizing: border-box;
  background-color: #f6f5f9;
`;
