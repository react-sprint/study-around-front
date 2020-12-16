import React, { Fragment } from 'react';
import styled from 'styled-components';
import PasswdGenerator from './PasswdGenerator';

interface FormProps {
  setStep: (number) => void;
  onCreate: () => void;
  onSavePasswd: () => void;
  handdlePasswd: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function PasswdForm({
  setStep,
  onCreate,
  onSavePasswd,
  handdlePasswd,
}: FormProps) {
  return (
    <Fragment>
      <Layout>
        <Title>스터디룸 비밀번호를 설정해주세요</Title>
        <PasswdGenerator handdlePasswd={handdlePasswd} />
        <SubmitButton
          onClick={() => {
            onSavePasswd();
            onCreate();
            setStep(3);
          }}
        >
          완료
        </SubmitButton>
      </Layout>
    </Fragment>
  );
}

export default PasswdForm;

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
