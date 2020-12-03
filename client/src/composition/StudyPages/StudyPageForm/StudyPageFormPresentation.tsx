import React, { Fragment } from 'react';
import styled from 'styled-components';
import Header from '../Header';
import FormContainer from './FormContainer';
function StudyPageFormPresentation() {
  return (
    <Fragment>
      <Header />
      <Layout>
        <FormContainer />
      </Layout>
    </Fragment>
  );
}

export default StudyPageFormPresentation;

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  max-width: 640px;
  height: 100%;
  margin: 0px auto 0px;
`;
