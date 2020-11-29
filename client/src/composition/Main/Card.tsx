import React from 'react';
import styled from 'styled-components';
import LabelTag from '../../components/LabelTag';

type CardProps = {
  body: string;
  title: string;
  imgSrc: string;
};

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

const ImageWrapper = styled.div`
  position: relative;
  background-color: powderblue;
  flex-basis: 65%;
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

const BottomBock = styled.div`
  display: flex;
  background-color: white;
  flex-basis: 35%;
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
    color: #8c8c8c;
  }
`;

const PercentageArea = styled.div`
  padding-right: 3px;
  font-weight: 700;
  color: rgb(255, 97, 120);
`;

function Card() {
  return (
    <CardWrapper>
      <CardContent>
        <ImageWrapper />
        <BottomBock>
          <LeftTextArea>
            <LabelTag
              text={'매니저'}
              textColor="rgb(255, 97, 120)"
              borderColor="red"
            />
            <p>오승영</p>
          </LeftTextArea>
          <RightTextArea>
            <PercentageArea>99%</PercentageArea>
            <p>인증률</p>
          </RightTextArea>
        </BottomBock>
      </CardContent>
    </CardWrapper>
  );
}

export default Card;
