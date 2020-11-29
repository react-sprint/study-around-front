import React from 'react';
import Card from '../Main/Card';
import styled from 'styled-components';
import { StudyInfo } from '../../constants/mocks';

const MainWrapper = styled.div`
  min-width: 280px;
  max-width: 720px;
  min-height: 90vh;
  margin: 0 auto;
`;

const CardList = styled.ul`
  height: inherit;
  display: flex;
  width: 90%;
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
  padding-top: 10vh;
  align-content: flex-start;
`;

const TodayStudyInfos = StudyInfo.TodayStudyInfos;

const Cards = TodayStudyInfos.map((info) => (
  <Card
    key={info.id}
    title={info.title}
    managerName={info.managerName}
    successRatio={info.successRatio}
    imgSrc={info.imgSrc}
  />
));

function MainPresentation() {
  return (
    <>
      <MainWrapper>
        <CardList>{Cards}</CardList>
        <CardList>{Cards}</CardList>
      </MainWrapper>
    </>
  );
}

export default MainPresentation;
