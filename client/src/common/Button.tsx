import React from 'react';
import styled, { css } from 'styled-components';

const StyledButton = styled.button`
  background: transparent;
  outline: none;
  border-radius: 24px;
  align-items: center;
  text-align: left;
  width: auto;
  height: auto;
  border: none;
  cursor: pointer;
  ${(props) =>
    props.hoverColor &&
    css`
      &:hover {
        background-color: ${props.hoverColor};
      }
    `}
`;

function Button({ hoverColor, ...rest }: any) {
  return <StyledButton hoverColor={hoverColor} {...rest} />;
}

export default Button;
