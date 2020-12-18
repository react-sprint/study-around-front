import React from 'react';
import styled from 'styled-components';

const LabelTagBox = styled.button`
  background: transparent;
  outline: none;

  padding: 1px 6px;
  text-align: center;
  border-radius: 20px;
  border: 1px solid ${(props) => props.borderColor};
  background-color: ${(props) => props.backgroundColor};
  color: ${(props) => props.textColor};
  font-size: ${(props) => props.fontSize};
  margin: 1px 6px 0 0;
`;

function LabelTag({
  text,
  backgroundColor,
  textColor,
  borderColor,
  fontSize,
  ...rest
}: any) {
  return (
    <LabelTagBox
      backgroundColor={backgroundColor}
      textColor={textColor}
      borderColor={borderColor}
      fontSize={fontSize}
      {...rest}
    >
      {text}
    </LabelTagBox>
  );
}

export default LabelTag;
