import React from 'react';
import styled from 'styled-components';
import GithubBlock from './GithubBlock';
import MenuButton from './MenuButton';

const StickyArea = styled.div`
  position: sticky;
  z-index: 3;
  top: 0px;
`;

const HeaderArea = styled.div`
  margin: 0 auto;
  border-bottom: solid 2px rgba(0, 0, 0, 0.1);
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.5);
  background-color: rgba(255, 255, 255, 0.9);
  display: flex;
  height: 95px;
  margin-bottom: 5px;
`;

const LeftContainer = styled.div`
  flex: 1 1 50px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
const RightContainer = styled.div`
  flex: 1 1 50px;
`;

const CenterContainer = styled.div`
  flex: 1 0 280px;
  max-width: 720px;
`;
const TitleBlock = styled.div`
  flex: 0.8;
  font-family: 'NotoSans Regular', 'AppleSDGothicNeo-Regular', '돋움', 'dotum',
    'sans-serif';
  font-weight: 600;
  font-size: 32px;
  color: ${(props) => props.theme.title};
  b {
    font-weight: 800;
  }
`;

const SubTitleBlock = styled.div`
  display: flex;
  align-items: center;
  font-family: 'sans-serif';
  font-size: 17px;
  padding-bottom: 5px;
  font-weight: 600;
  box-sizing: border-box;
  flex: 0.2;
  color: ${(props) => props.theme.gray};
`;

const TextArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px 30px;
`;

function HeaderPresentation() {
  return (
    <StickyArea>
      <HeaderArea>
        <LeftContainer>
          <MenuButton />
        </LeftContainer>
        <CenterContainer>
          <TextArea>
            <SubTitleBlock>당신 곁의 스터디</SubTitleBlock>
            <TitleBlock>
              스터디 <b>어라운드</b>
            </TitleBlock>
          </TextArea>
        </CenterContainer>
        <RightContainer />
      </HeaderArea>
      <GithubBlock />
    </StickyArea>
  );
}

export default HeaderPresentation;
