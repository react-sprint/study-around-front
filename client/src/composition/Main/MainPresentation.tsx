import React, { useEffect } from 'react';
import Card from '../Main/Card';
import styled from 'styled-components';
import { StudyInfo } from '../../constants/mocks';

const MainWrapper = styled.div`
  min-width: 280px;
  max-width: 720px;
  min-height: 90vh;
  margin: 0 auto;
  div {
    &.main-body {
      width: 90%;
    }
  }
`;

const CardList = styled.ul`
  height: inherit;
  display: flex;
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
  align-content: flex-start;
`;

const CardTtile = styled.div`
  position: relative;
  width: 100%;
  margin-top: 4vh;
  font-size: 28px;
  padding: 0 1vw;
  color: ${(props) => props.theme.body};
  font-family: sans-serif;
  font-weight: 600;
`;

const TodayStudyInfos = StudyInfo.TodayStudyInfos;

function MainPresentation(props: any) {
  const { projects } = props;
  console.log('MainPresentation projects', projects);
  useEffect(() => {
    // console.log(projects?.projectsStatus?.data);
    if (projects?.projectsStatus.data.length === 0) {
      alert('불러올 스터디가 없습니다.');
    }
  }, []);
  const Cards = TodayStudyInfos.map((info) => (
    <Card
      key={info.id}
      title={info.title}
      managerName={info.managerName}
      successRatio={info.successRatio}
      imgSrc={info.imgSrc}
    />
  ));

  return (
    <>
      <MainWrapper>
        <div className="main-body">
          <CardTtile>상쾌한 아침 🍳</CardTtile>
          <CardList>{Cards}</CardList>
          <CardTtile>포근한 낮 🌳</CardTtile>
          <CardList>{Cards}</CardList>
          <CardTtile>소중한 밤 ☕️</CardTtile>
          <CardList>{Cards}</CardList>
        </div>
      </MainWrapper>
    </>
  );
}

export default MainPresentation;
