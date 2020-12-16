import React, { Fragment, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import DeleteModal from '../StudyPageDelete/DeleteModal';

function DeleteTab() {
  const [ModalOpen, setModalOpen] = useState(false);
  return (
    <Fragment>
      <Layout>
        <Title>스터디 관리 ⚙️</Title>
        <SubmitButton onClick={() => setModalOpen(!ModalOpen)}>
          스터디 탈퇴하기
        </SubmitButton>
      </Layout>
      <Fragment>
        <BackGroundLayer ModalOpen={ModalOpen}>
          <BackGround onClick={() => setModalOpen(!ModalOpen)}></BackGround>
          <DeleteModal ModalOpen={ModalOpen} />
        </BackGroundLayer>
      </Fragment>
    </Fragment>
  );
}

export default DeleteTab;
const FadeIn = () => keyframes`
from {
    background-color: rgba(128, 128, 128,0);
}
to {
    background-color: rgba(128, 128, 128,0.7);
}
`;
const Fadeout = () => keyframes`
from {
    background-color: rgba(128, 128, 128,0.7);
}
to {
    background-color: rgba(128, 128, 128,0);
}
`;
const BackGroundLayer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  z-index: 9998;
  bottom: 0px;
  width: 100%;
  height: 100%;
  /* opacity:0.7; */
  /* background-color: #808080; */
  background-color: rgba(128, 128, 128, 0.7);

  visibility: ${(props) => (props.ModalOpen ? 'visible' : 'hidden')};
  animation: ${(props) => (props.ModalOpen ? FadeIn : Fadeout)} 0.5s linear;
  transition: visibility 0.5s linear;
`;
const BackGround = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;
const Title = styled.div`
  width: 110px;
  text-align: left;
  border-bottom: 2px solid #000;
  padding: 0px 5px 5px 0px;
  box-sizing: border-box;
  font-size: 18px;
  font-weight: bold;
  color: #000;
`;
const SubmitButton = styled.div`
  cursor: pointer;
  margin-top: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  color: #fff;
  font-size: 12px;
  width: 90px;
  height: 40px;
  background-color: #ff6178;
  border-radius: 5px;
  border: none;
`;
const Layout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  padding: 28px 0px;
  box-sizing: border-box;
`;
