import React, { Fragment } from 'react';
import styled, { keyframes } from 'styled-components';
import IfLeaderAndMoreThanOne from './DeleteModalComponents/IfLeaderAndMoreThanOne';
import IfMember from './DeleteModalComponents/IfMember';

function DeleteModal({ ModalOpen }: any) {
  return (
    <Fragment>
      <Layout ModalOpen={ModalOpen}>
        {/*
<IfLeaderAndMoreThanOne/>
*/}

        <IfMember />
        {/*    */}
      </Layout>
    </Fragment>
  );
}

export default DeleteModal;
const FadeIn = () => keyframes`
from{
    transform:translateY(500px);
}
to {
    transform:translateY(0px);
}
`;
const Fadeout = () => keyframes`
from{
    transform:translateY(0px);
}
to {
    transform:translateY(500px);
}
`;
const Layout = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 32px 16px;
  width: 400px;
  height: 450px;
  border-radius: 10px;
  box-sizing: border-box;
  background-color: #fff;
  z-index: 9999;
  visibility: ${(props) => (props.ModalOpen ? 'visible' : 'hidden')};
  animation: ${(props) => (props.ModalOpen ? FadeIn : Fadeout)} 0.5s ease-out;
  transition: visibility 0.5s ease-out;
`;
