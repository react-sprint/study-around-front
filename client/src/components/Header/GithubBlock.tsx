import React from 'react';
import styled from 'styled-components';
import Button from '../../components/Button';
import { ReactComponent as GitIcon } from '../../styles/svg/github.svg';

const CustomButton = styled(Button)`
  width: 45px;
  height: 45px;
  padding: 10px;
  flex: 0 0 auto;
  margin-top: 5px;
  path {
    stroke: ${(props) => props.theme.title};
  }
`;

const GithubContainer = styled.div`
  position: relative;
  width: 100%;
  height: 45px;
  display: flex;
  justify-content: center;
`;

function GithubBlock() {
  return (
    <>
      <GithubContainer>
        <CustomButton
          hoverColor={'rgba(0, 0, 0, 0.05)'}
          onClick={(e) => {
            e.preventDefault();
            window.location.assign(
              'https://github.com/react-sprint/study-around-front'
            );
          }}
        >
          <GitIcon />
        </CustomButton>
      </GithubContainer>
    </>
  );
}

export default GithubBlock;
