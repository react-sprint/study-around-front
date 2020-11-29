import React from 'react';
import Card from '../Main/Card';
import styled from 'styled-components';

const MainWrapper = styled.div`
  min-width: 280px;
  max-width: 720px;
  height: 100vh;
  margin: 0 auto;
  background-color: gray;
`;

const CardList = styled.ul`
  height: inherit;
  display: flex;
  width: 90%;
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
  align-content: flex-start;
`;

function MainPresentation() {
  return (
    <>
      <MainWrapper>
        <CardList>
          <Card />
          <Card />
          <Card />
          <Card />
        </CardList>
      </MainWrapper>
    </>
  );
}

export default MainPresentation;
