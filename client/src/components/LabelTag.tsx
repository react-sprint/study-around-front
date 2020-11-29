import React from 'react';
import styled, { css } from 'styled-components';

type LabelParams = {
  text: string;
  backgroundColor?: string;
  borderColor?: string;
  textColor?: string;
};

const LabelTagBox = styled.div<LabelParams>`
  padding: 1px 6px;
  text-align: center;
  border-radius: 20px;
  border: 1px solid ${(props) => props.borderColor};
  background-color: ${(props) => props.backgroundColor};
  color: ${(props) => props.textColor};
  margin: 1px 6px 0 0;
`;

function LabelTag({ text, backgroundColor, textColor, ...rest }: LabelParams) {
  return (
    <LabelTagBox
      backgroundColor={backgroundColor}
      textColor={textColor}
      {...rest}
    >
      {text}
    </LabelTagBox>
  );
}

export default LabelTag;
