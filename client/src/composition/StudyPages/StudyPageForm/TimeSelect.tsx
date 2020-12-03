import React, { Fragment } from 'react';
import styled from 'styled-components';

function TimeSelect() {
  return (
    <Fragment>
      <Layout>
        {/*<SelectAPM>
        <option value="AM">AM</option>
        <option value="PM">PM</option>
        </SelectAPM>
        */}
        <SelectTime>
          <option value="0">00</option>
          <option value="1">01</option>
          <option value="2">02</option>
          <option value="3">03</option>
          <option value="4">04</option>
          <option value="5">05</option>
          <option value="6">06</option>
          <option value="7">07</option>
          <option value="8">08</option>
          <option value="9">09</option>
          <option value="10">10</option>
          <option value="11">11</option>
          <option value="12">12</option>
          <option value="13">13</option>
          <option value="14">14</option>
          <option value="15">15</option>
          <option value="16">16</option>
          <option value="17">17</option>
          <option value="18">18</option>
          <option value="19">19</option>
          <option value="20">20</option>
          <option value="21">21</option>
          <option value="22">22</option>
          <option value="23">23</option>
        </SelectTime>
        :
        <SelectTime>
          <option value="0">00</option>
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="30">30</option>
          <option value="40">40</option>
          <option value="50">50</option>
        </SelectTime>
        ~
        <SelectTime>
          <option value="1">01</option>
          <option value="2">02</option>
          <option value="3">03</option>
          <option value="4">04</option>
          <option value="5">05</option>
          <option value="6">06</option>
          <option value="7">07</option>
          <option value="8">08</option>
          <option value="9">09</option>
          <option value="10">10</option>
          <option value="11">11</option>
          <option value="12">12</option>
          <option value="13">13</option>
          <option value="14">14</option>
          <option value="15">15</option>
          <option value="16">16</option>
          <option value="17">17</option>
          <option value="18">18</option>
          <option value="19">19</option>
          <option value="20">20</option>
          <option value="21">21</option>
          <option value="22">22</option>
          <option value="23">23</option>
          <option value="24">24</option>
        </SelectTime>
        :
        <SelectTime>
          <option value="0">00</option>
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="30">30</option>
          <option value="40">40</option>
          <option value="50">50</option>
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
