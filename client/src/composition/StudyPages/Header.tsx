import React, { Fragment } from 'react';
import styled from 'styled-components';

function Header() {
  return (
    <Fragment>
      <Wrapper>
        <Layout>
          <Title>📖 프로젝트를 생성해보세요 </Title>
          <Desc>프로젝트 운영에 관련된 내용을 입력해주세요!</Desc>
        </Layout>
      </Wrapper>
    </Fragment>
  );
}

export default Header;
const Desc = styled.div`
  margin-top: 30px;
  font-size: 14px;
  font-weight: bold;
  color: #808080;
`;

const Title = styled.div`
  width: 100%;
  font-size: 32px;
  font-weight: bold;
  color: #6c51b4;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 200px;
  border-bottom: 1px solid #e5e5e5;
`;

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 640px;
  padding: 0px 10px;
  box-sizing: border-box;
  margin: 0px auto;
`;
