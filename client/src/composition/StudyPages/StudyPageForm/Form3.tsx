import React, { Fragment } from 'react';
import styled from 'styled-components';

function Form3() {
  return (
    <Fragment>
      <Layout>
        <Title>
          🎉 축하합니다 🎉
          <br />
          <br />
          스터디 이름 스터디가 생성되었습니다.
        </Title>
        <StudyLink>https://study-around.com/la24lk1lk</StudyLink>
        <SubmitButton>홈으로 가기</SubmitButton>
      </Layout>
    </Fragment>
  );
}

export default Form3;
const StudyLink = styled.div`
  text-decoration: underline;
  margin-top: 30px;
  text-align: center;
  font-size: 18px;
  font-weight: bold;
  color: #808080;
`;
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
  text-align: center;
  font-size: 24px;
  font-weight: bold;
  color: #000;
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
