import React, { Fragment } from 'react';
import styled from 'styled-components';

function StudyDesc() {
  return (
    <Fragment>
      <Layout>
        <Article>
          프로젝트 소개와 개설 이유
          <br />
          <br />
          센 : 센스도
          <br />
          스 : 스-읍관이다 👻
          <br />
          <br />
          1일 1개 N행시로 굳어진 머리를 말랑말랑하게 해봐요!
          <br />
          이런 분께 추천해요
          <br />
          <br />
          말장난 장인
          <br />
          센스력 필수 마케터
          <br />
          어째 머리가 굳은 분
          <br />
          <br />
          <br />
          프로젝트 종료 후 기대되는 변화
          <br />
          <br />
          당신을 보는 누군가는 생각할 겁니다. "오.. 센스 장난없는데"
        </Article>
      </Layout>
    </Fragment>
  );
}

export default StudyDesc;
const Article = styled.div`
  width: 100%;
  font-size: 13px;
  font-weight: bold;
  color: #000;
`;
const Layout = styled.div`
  width: 100%;
  padding: 36px 20px 58px;
  box-sizing: border-box;
`;
