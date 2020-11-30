import React from 'react';
import styled, { css } from 'styled-components';

const StyledButton = styled.button`
  border-radius: 24px;
  background: transparent;
  align-items: center;
  text-align: left;
  outline: none;
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
