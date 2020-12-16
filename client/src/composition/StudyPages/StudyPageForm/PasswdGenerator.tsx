import React, { Fragment } from 'react';
import styled from 'styled-components';

interface PasswdGeneratorProps {
  handdlePasswd: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function PassWordGenerator({ handdlePasswd }: PasswdGeneratorProps) {
  return (
    <Fragment>
      <Layout>
        <PassWordInput
          type="number"
          name={'first_passwd'}
          onChange={handdlePasswd}
        />
        <PassWordInput
          type="number"
          name={'second_passwd'}
          onChange={handdlePasswd}
        />
        <PassWordInput
          type="number"
          name={'third_passwd'}
          onChange={handdlePasswd}
        />
        <PassWordInput
          type="number"
          name={'firth_passwd'}
          onChange={handdlePasswd}
        />
      </Layout>
    </Fragment>
  );
}

export default PassWordGenerator;
const PassWordInput = styled.input`
  outline: none;
  text-align: center;
  font-size: 24px;
  font-weight: bold;
  margin: 0px 5px;
  width: 50px;
  height: 60px;
  border: 1px solid #808080;
  border-radius: 5px;
  box-sizing: border-box;
  -webkit-appearance: none;
`;

const Layout = styled.div`
  margin-top: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;
