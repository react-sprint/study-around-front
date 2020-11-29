import React from 'react';
import styled from 'styled-components';
import LabelTag from '../../components/LabelTag';
import palette from '../../styles/theme';

const CardWrapper = styled.li`
  flex: none;
  margin-top: 4vh;
  height: 25vh;
  flex-basis: 50%;
  box-sizing: border-box;
  padding: 0 1vw;
`;

const CardContent = styled.div`
  height: inherit;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border-radius: 5px;
  box-shadow: 0 1px 10px 0 hsla(0, 0%, 60.4%, 0.8);
`;

const TopCradBlock = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  flex-basis: 75%;
`;
const ImageContainer = styled.div`
  background-image: url(${(props) => props.imgSrc});
  background-size: cover;
  background-position: 50% 50%;
  position: absolute;
  width: 100%;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;

  height: 100%;
  &::after {
    content: '';
    background-color: rgba(0, 0, 0, 0.4);
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
  }
`;

const TitleContainer = styled.strong`
  width: 100%;
  position: relative;
  z-index: 1;
  padding: 0 10%;
  color: white;
  font-family: 'NotoSans Bold', sans-serif;
  font-weight: 900;
  font-size: 26px;
`;

const BottomCardBock = styled.div`
  display: flex;
  background-color: white;
  flex-basis: 25%;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
`;

const LeftTextArea = styled.div`
  margin-left: 20px;
  display: flex;
  align-items: center;
  p {
    font-weight: 700;
  }
`;

const RightTextArea = styled.div`
  margin-right: 20px;
  display: flex;
  align-items: center;
  p {
    color: ${(props) => props.theme.gray};
  }
`;

const PercentageArea = styled.div`
  padding-right: 5px;
  font-weight: 700;
  color: ${(props) => props.theme.rightRed};
`;

const LabelColor = `${palette.red}`;

type CardProps = {
  title: string;
  managerName: string;
  successRatio: number;
  imgSrc?: string;
};

function Card({ title, managerName, successRatio, imgSrc }: CardProps) {
  return (
    <CardWrapper>
      <CardContent>
        <TopCradBlock>
          <ImageContainer imgSrc={imgSrc} />
          <TitleContainer>{title}</TitleContainer>
        </TopCradBlock>
        <BottomCardBock>
          <LeftTextArea>
            <LabelTag
              text={'매니저'}
              textColor={LabelColor}
              borderColor={LabelColor}
            />
            <p>{managerName}</p>
          </LeftTextArea>
          <RightTextArea>
            <PercentageArea>{successRatio}%</PercentageArea>
            <p>달성 중</p>
          </RightTextArea>
        </BottomCardBock>
      </CardContent>
    </CardWrapper>
  );
}

export default Card;
