import React, { Fragment } from 'react';
import styled from 'styled-components';

interface TimeSelectProps {
  handleForm: (key: string, value: string | number) => void;
}

function TimeSelect({ handleForm }: TimeSelectProps): JSX.Element {
  const get_loop_options = (
    startIndex: number,
    endIndex: number,
    offset: number
  ): JSX.Element[] => {
    const options: JSX.Element[] = [];

    for (startIndex; startIndex < endIndex; startIndex += offset) {
      options.push(
        <option value={startIndex} key={startIndex}>
          {startIndex}
        </option>
      );
    }
    return options;
  };

  return (
    <Fragment>
      <Layout>
        {/*<SelectAPM>
        <option value="AM">AM</option>
        <option value="PM">PM</option>
        </SelectAPM>
        */}
        <SelectTime
          name="startHour"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            const key = e.target.name;
            const value = Number(e.target.value);
            handleForm(key, value);
          }}
        >
          {get_loop_options(0, 24, 1)}
        </SelectTime>
        :
        <SelectTime
          name="startMinutes"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            const key = e.target.name;
            const value = Number(e.target.value);
            handleForm(key, value);
          }}
        >
          {get_loop_options(0, 51, 10)}
        </SelectTime>
        ~
        <SelectTime
          name="endHour"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            const key = e.target.name;
            const value = Number(e.target.value);
            handleForm(key, value);
          }}
        >
          {get_loop_options(0, 24, 1)}
        </SelectTime>
        :
        <SelectTime
          name="endMinutes"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            const key = e.target.name;
            const value = Number(e.target.value);
            handleForm(key, value);
          }}
        >
          {get_loop_options(0, 51, 10)}
        </SelectTime>
      </Layout>
    </Fragment>
  );
}

export default TimeSelect;
const SelectTime = styled.select`
  cursor: pointer;
  font-size: 14px;
  font-weight: bold;
  color: #737373;
  margin: 0px 3px;
  display: flex;
  justify-content: center;
  text-align-last: center;
  // text-align-last는 크롬에서만 사용 가능
  outline: none;
  width: 50px;
  height: 30px;
  padding: 0px 5px;
  box-sizing: border-box;
  border: 1px solid #808080;
  border-radius: 5px;
  appearance: none;
  background-color: #fff;
  // select 우측 화살표 없음
`;
const Layout = styled.div`
  margin-top: 20px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  font-weight: bold;
  color: #737373;
`;
